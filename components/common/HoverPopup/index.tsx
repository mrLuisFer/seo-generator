import { useState } from 'react'
import { Box, Text, ScaleFade } from '@chakra-ui/react'
import { gray, white, black } from 'lib/chakraColors'
import { useDarkMode } from 'hooks/useDarkMode'

interface HoverPopupProps {
  bgColor: string
  children: any
  height?: string
  text: string
  textSize?: string
  width?: string
}

export default function HoverPopup({
  bgColor = '',
  children,
  height,
  text = '',
  textSize = '0.75rem',
  width = '',
  ...props
}: HoverPopupProps) {
  const [showPopup, setShowPopup] = useState(false)

  const { isDarkMode } = useDarkMode()

  const bgModeColor = isDarkMode ? gray.$300 : gray.$700
  const hasPropBgColor = bgColor.length > 1 ? bgColor : bgModeColor

  return (
    <Box
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      position="relative"
    >
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
        >
          <ScaleFade initialScale={0.85} in={showPopup}>
            <Text
              textAlign="center"
              fontWeight="bold"
              color={isDarkMode ? black : white}
              fontSize={textSize}
              {...props}
            >
              {text}
            </Text>
          </ScaleFade>
        </Box>
      )}
    </Box>
  )
}
