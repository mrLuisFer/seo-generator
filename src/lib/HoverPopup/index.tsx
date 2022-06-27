import { useEffect, useState } from 'react';
import { Box, Text, ScaleFade } from '@chakra-ui/react';
import { gray, white, black } from 'utils/chakraColors';
import { useDarkMode } from 'hooks/useDarkMode';

interface HoverPopupProps {
  bgColor?: string;
  children: any;
  height?: string;
  text: string;
  textSize?: string;
  width: string;
  right?: string;
  top?: string;
  [textProps: string]: any;
}

export default function HoverPopup({
  bgColor = '',
  children,
  height,
  text = '',
  textSize = '0.75rem',
  width,
  right = '0',
  top = '0',
  ...props
}: HoverPopupProps) {
  const [showPopup, setShowPopup] = useState(false);
  const { isDarkMode } = useDarkMode();

  const bgModeColor = isDarkMode ? gray.$300 : gray.$700;
  const hasPropBgColor = bgColor.length > 1 ? bgColor : bgModeColor;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)} position="relative">
      {children}
      {showPopup && (
        <Box
          position="absolute"
          bg={hasPropBgColor}
          p="0.5rem"
          borderRadius="10px"
          mt="0.5rem"
          zIndex="10"
          w={width}
          h={height}
          right={right}
          top={top}
          transition="all 0.1s ease-in-out"
          opacity="0.9"
        >
          <ScaleFade initialScale={0.85} in={showPopup}>
            <Text
              textAlign="center"
              fontWeight="bold"
              color={isDarkMode ? black : white}
              fontSize={textSize}
              userSelect="none"
              {...props}
            >
              {text}
            </Text>
          </ScaleFade>
        </Box>
      )}
    </Box>
  );
}
