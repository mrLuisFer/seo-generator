import { useState } from 'react'
import { FormControl, Input } from '@chakra-ui/react'
import { blue } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'
import InputLabel from './InputLabel'

interface InputFormProps {
  required?: boolean
  inputId: string
  placeholder: string
  labelValue: string
  inputheight?: string | number
  inputwidth?: string | number
  inputType: string
  [x: string]: any
}

export default function InputForm({
  required = false,
  inputId,
  placeholder,
  labelValue,
  inputheight,
  inputwidth,
  inputType = 'text' || 'email' || 'number' || 'password' || 'url' || 'checkbox',
  ...props
}: InputFormProps) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <FormControl id={inputId} isRequired={required} marginTop={{ lg: '0rem' }}>
      <InputLabel inputId={inputId} isFocus={isFocus} key={inputId}>
        {labelValue}
      </InputLabel>
      <Input
        {...props}
        _hover={{ borderColor: blue.$500 }}
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
        autoComplete="off"
        borderWidth="2px"
        transform={{
          base: isFocus ? 'scale(1.02)' : 'scale(1)',
          lg: isFocus ? 'scale(1.02)' : 'scale(1)',
        }}
      />
    </FormControl>
  )
}
