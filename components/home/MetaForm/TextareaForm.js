import { useState } from 'react'
import { Textarea, FormControl, FormLabel } from '@chakra-ui/react'
import { teal } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'

export default function TextareaForm({
  placeholder,
  labelValue,
  textareaId,
  required = false,
  ...props
}) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <FormControl
      id={textareaId}
      isRequired={required}
      marginTop={{ lg: '0rem' }}
      _hover={{ color: teal.teal100 }}
    >
      <FormLabel htmlFor={textareaId} fontWeight="semibold" color={isFocus ? teal.teal200 : ''}>
        {labelValue}
      </FormLabel>
      <Textarea
        {...props}
        _hover={{ borderColor: teal.teal100 }}
        id={textareaId}
        name={textareaId}
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        height={{ base: isFocus ? '7rem' : '5rem', lg: isFocus ? '9rem' : '7rem' }}
        transition={transitionProperty('all')}
      ></Textarea>
    </FormControl>
  )
}
