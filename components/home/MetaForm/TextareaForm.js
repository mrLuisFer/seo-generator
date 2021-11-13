import { Textarea, FormControl, FormLabel } from '@chakra-ui/react'

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
  return (
    <FormControl id={textareaId} isRequired={required}>
      <FormLabel htmlFor={textareaId} fontWeight="semibold">
        {labelValue}
      </FormLabel>
      <Textarea
        {...props}
        h={textareaHeight}
        id={textareaId}
        name={textareaId}
        placeholder={placeholder}
        w={textareaWidth}></Textarea>
    </FormControl>
  )
}
