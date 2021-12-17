import { useState } from 'react'
import { FormControl, Input } from '@chakra-ui/react'
import { teal } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'
import InputLabel from './InputLabel'

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
    <FormControl id={inputId} isRequired={required} marginTop={{ lg: '0rem' }}>
      <InputLabel inputId={inputId} isFocus={isFocus} key={inputId}>
        {labelValue}
      </InputLabel>
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
        autoComplete='off'
        transform={{
          base: isFocus ? 'scale(1.02)' : 'scale(1)',
          lg: isFocus ? 'scale(1.03)' : 'scale(1)',
        }}
      />
    </FormControl>
  )
}
