import { useState } from 'react'
import { Box, Text, ScaleFade, useColorModeValue } from '@chakra-ui/react'
import { gray, white } from 'utils/chakraColors'
import ClickOutside from '../ClickOutside'

interface ClickPopupProps {
  text?: string
  children: any
  bgColor?: string
  textColor?: string
  width: string | number
  height: string | number
}

export default function ClickPopup({
  text = '',
  children,
  bgColor = '',
  textColor = white,
  width,
  height,
}: ClickPopupProps) {
  const [showPopup, setShowPopup] = useState(false)
  const popUpBgHookValue = useColorModeValue(gray.$800, gray.$600)
  const popUpBgColor = bgColor.length < 1 ? popUpBgHookValue : bgColor

  return (
    <Box onClick={() => setShowPopup(true)} position="relative">
      {children}
      {showPopup && (
        <ClickOutside stateFunc={setShowPopup}>
          <Box
            bg={popUpBgColor}
            borderRadius="10px"
            color={textColor}
            h={height}
            mt="0.5rem"
            p="0.5rem"
            position="absolute"
            userSelect="none"
            w={width}
            zIndex="10"
            opacity="0.5"
            transition="0.1s ease-in"
            _hover={{
              opacity: '1',
            }}
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
