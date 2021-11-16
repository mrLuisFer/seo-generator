import { useState } from 'react'
import { FormControl, Input, FormLabel } from '@chakra-ui/react'
import { teal } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'

export default function InputForm({
  required = false,
  inputId,
  placeholder,
  labelValue,
  inputheight,
  inputwidth,
  inputType = 'text',
  ...props
}) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <FormControl
      _hover={{ color: teal.teal100 }}
      id={inputId}
      isRequired={required}
      marginTop={{ lg: '0rem' }}
    >
      <FormLabel
        color={isFocus ? teal.teal200 : ''}
        display="inline-block"
        fontWeight="semibold"
        htmlFor={inputId}
        userSelect="none"
      >
        {labelValue}
      </FormLabel>
      <Input
        {...props}
        _hover={{ borderColor: teal.teal100 }}
        height={inputheight}
        id={inputId}
        name={inputId}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        placeholder={placeholder}
        required={required}
        type={inputType}
        width={inputwidth}
        transition={transitionProperty('all')}
        transform={{
          base: isFocus ? 'scale(1.03)' : 'scale(1)',
          lg: isFocus ? 'scale(1.05)' : 'scale(1)',
        }}
      />
    </FormControl>
  )
}
