import { useState } from 'react'
import { Textarea, FormControl } from '@chakra-ui/react'
import { blue } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'
import InputLabel from './InputLabel'

export default function TextareaForm({
  placeholder,
  labelValue,
  textareaId,
  required = false,
  ...props
}) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <FormControl id={textareaId} isRequired={required} marginTop={{ lg: '0rem' }}>
      <InputLabel inputId={textareaId} isFocus={isFocus} key={textareaId}>
        {labelValue}
      </InputLabel>
      <Textarea
        {...props}
        _hover={{ borderColor: blue.$500 }}
        id={textareaId}
        name={textareaId}
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        overflowY="hidden"
        required={true}
        borderWidth="2px"
        height={{ base: isFocus ? '6rem' : '4rem', lg: isFocus ? '7rem' : '5rem' }}
        transition={transitionProperty('all')}
      ></Textarea>
    </FormControl>
  )
}
