import { FormLabel } from '@chakra-ui/react'
import { teal } from 'lib/chakraColors'

export default function InputLabel({ children, isFocus, inputId, ...props }) {
  return (
    <FormLabel
      _hover={{ color: teal.teal100 }}
      color={isFocus ? teal.teal200 : ''}
      display="inline-block"
      fontWeight="semibold"
      htmlFor={inputId}
      userSelect="none"
      {...props}
    >
      {children}
    </FormLabel>
  )
}
