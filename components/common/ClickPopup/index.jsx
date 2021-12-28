import { useState } from 'react'
import { Box, Text, ScaleFade, useColorModeValue } from '@chakra-ui/react'
import { gray, white } from 'lib/chakraColors'
import ClickOutside from '../ClickOutside'

export default function ClickPopup({
  text = '',
  children,
  bgColor = '',
  textColor = white,
  width,
  height,
}) {
  const [showPopup, setShowPopup] = useState(false)
  const popUpBgHookValue = useColorModeValue(gray.$800, gray.$600)
  const popUpBgColor = bgColor.length < 1 ? popUpBgHookValue : bgColor

  return (
    <Box onClick={() => setShowPopup(true)} position="relative">
      {children}
      {showPopup && (
        <ClickOutside stateFunc={setShowPopup}>
          <Box
            position="absolute"
            bg={popUpBgColor}
            color={textColor}
            p="0.5rem"
            borderRadius="10px"
            mt="0.5rem"
            zIndex="10"
            w={width}
            h={height}
            userSelect="none"
          >
            <ScaleFade initialScale={0.85} in={showPopup}>
              <Box>
                <Text fontSize="xs" textAlign="center">
                  {text}
                </Text>
              </Box>
            </ScaleFade>
          </Box>
        </ClickOutside>
      )}
    </Box>
  )
}
