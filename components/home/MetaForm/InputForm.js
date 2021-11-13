import { FormControl, Input, FormLabel } from '@chakra-ui/react'

export default function InputForm({
  required = false,
  inputId,
  placeholder,
  labelValue,
  inputheight,
  inputwidth,
  ...props
}) {
  return (
    <FormControl isRequired={required} id={inputId}>
      <FormLabel htmlFor={inputId} fontWeight="semibold">
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
      />
    </FormControl>
  )
}
