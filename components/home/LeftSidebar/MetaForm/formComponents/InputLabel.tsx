import { FormLabel, Flex, Button, useColorModeValue } from '@chakra-ui/react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { blue, gray, teal, white } from 'lib/chakraColors'
import ClickPopup from 'lib/ClickPopup'
import { transitionProperty } from 'lib/transitionProperty'

export default function InputLabel({ children, isFocus, inputId, ...props }) {
  const labelHoverColor = useColorModeValue(blue.$500, teal.$300)

  return (
    <Flex align="center" justify="space-between">
      <FormLabel
        _hover={{ color: labelHoverColor }}
        display="inline-block"
        fontWeight="semibold"
        htmlFor={inputId}
        userSelect="none"
        margin="0"
        color={isFocus && labelHoverColor}
        {...props}
      >
        {children}
      </FormLabel>
      <ClickPopup text="Info" width="auto" height="auto">
        <Button
          _hover={{ background: gray.$700, color: white, opacity: 1 }}
          p="0rem"
          m="0.4rem"
          size="sm"
          title="Click to know what's this attribute"
          bg="transparent"
          opacity="0.2"
          transition={transitionProperty()}
        >
          <IoMdInformationCircleOutline size="1.5em" />
        </Button>
      </ClickPopup>
    </Flex>
  )
}
