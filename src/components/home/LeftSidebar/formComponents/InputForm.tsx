import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { FormControl, Input } from '@chakra-ui/react'
import { blue } from 'utils/chakraColors'
import { transitionProperty } from 'utils/transitionProperty'
import InputLabel from './InputLabel'
import { useCreateUUID } from 'hooks/useCreateUUID'

interface InputFormProps {
  required?: boolean
  inputId: string
  placeholder: string
  labelValue?: string
  inputheight?: string | number
  inputwidth?: string | number
  inputType?: string
  state?: string
  infoTxt?: string
  setState: Dispatch<SetStateAction<string>>
  value: string
  [x: string]: any
}

export default function InputForm({
  required = false,
  inputId,
  placeholder,
  labelValue = '',
  inputheight,
  inputwidth,
  infoTxt = '',
  inputType = 'text',
  setState,
  value = '',
  ...props
}: InputFormProps) {
  const [isFocus, setIsFocus] = useState(false)
  const { uuid } = useCreateUUID()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }
  const scaleValue: string = isFocus ? 'scale(1.01)' : 'scale(1)'

  return (
    <FormControl id={inputId} isRequired={required} marginTop={{ lg: '0rem' }}>
      {labelValue.length > 1 ? (
        <InputLabel infoTxt={infoTxt} inputId={inputId} isFocus={isFocus} key={inputId}>
          {labelValue}
        </InputLabel>
      ) : null}
      <Input
        key={uuid}
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
        transition={transitionProperty('border-color', 0.1)}
        autoComplete="off"
        borderWidth="2px"
        pattern="[a-z]{3,10}"
        transform={{
          base: scaleValue,
        }}
        onChange={handleOnChange}
        value={value}
        {...props}
      />
    </FormControl>
  )
}
