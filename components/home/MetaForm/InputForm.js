import { useState } from 'react'
import { FormControl, Input, FormLabel } from '@chakra-ui/react'
import { teal } from 'lib/chakraColors'

export default function InputForm({
  required = false,
  inputId,
  placeholder,
  labelValue,
  inputheight,
  inputwidth,
  ...props
}) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <FormControl isRequired={required} id={inputId}>
      <FormLabel
        htmlFor={inputId}
        fontWeight="semibold"
        color={isFocus ? teal.teal200 : ''}
        display="inline-block"
        userSelect="none"
      >
        {labelValue}
      </FormLabel>
      <Input
        {...props}
        height={inputheight}
        id={inputId}
        name={inputId}
        placeholder={placeholder}
        type="text"
        width={inputwidth}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        required={required}
      />
    </FormControl>
  )
}
