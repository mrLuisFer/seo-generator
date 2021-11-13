import { useState } from 'react'
import { Textarea, FormControl, FormLabel } from '@chakra-ui/react'
import { teal } from '../../../lib/chakraColors'

export default function TextareaForm({
  placeholder,
  value,
  labelValue,
  textareaId,
  textareaWidth,
  textareaHeight,
  required = false,
  ...props
}) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <FormControl id={textareaId} isRequired={required}>
      <FormLabel htmlFor={textareaId} fontWeight="semibold" color={isFocus ? teal.teal200 : ''}>
        {labelValue}
      </FormLabel>
      <Textarea
        {...props}
        h={textareaHeight}
        id={textareaId}
        name={textareaId}
        placeholder={placeholder}
        w={textareaWidth}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}></Textarea>
    </FormControl>
  )
}
