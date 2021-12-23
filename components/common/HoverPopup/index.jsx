import { useState } from 'react'
import { Box, Text, ScaleFade } from '@chakra-ui/react'
import { gray, white, black } from 'lib/chakraColors'
import { useDarkMode } from 'hooks/useDarkMode'

export default function HoverPopup({ text = '', children, bgColor = '', width, height }) {
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
              fontSize="xs"
              textAlign="center"
              fontWeight="bold"
              color={isDarkMode ? black : white}
            >
              {text}
            </Text>
          </ScaleFade>
        </Box>
      )}
    </Box>
  )
}
