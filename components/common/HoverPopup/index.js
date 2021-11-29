import { useState } from 'react'
import { Box, Text, ScaleFade } from '@chakra-ui/react'
import { gray, white } from 'lib/chakraColors'

export default function HoverPopup({ text = '', children, bgColor = gray.gray700, width, height }) {
  const [showPopup, setShowPopup] = useState(false)

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
          bg={bgColor}
          p="0.5rem"
          borderRadius="10px"
          mt="0.5rem"
          zIndex="10"
          w={width}
          h={height}
        >
          <ScaleFade initialScale={0.85} in={showPopup}>
            <Box>
              <Text fontSize="xs" color={white} textAlign="center">
                {text}
              </Text>
            </Box>
          </ScaleFade>
        </Box>
      )}
    </Box>
  )
}
