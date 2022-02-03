import { Dispatch, SetStateAction, useState } from 'react'
import { Textarea, FormControl } from '@chakra-ui/react'
import { blue } from 'utils/chakraColors'
import { transitionProperty } from 'utils/transitionProperty'
import InputLabel from './InputLabel'
import { useCreateUUID } from 'hooks/useCreateUUID'

interface TextareaFormProps {
  placeholder: string
  labelValue: string
  textareaId: string
  required?: boolean
  infoTxt: string
  setStateValue: Dispatch<SetStateAction<string>>
  value: string
  [x: string]: any
}

export default function TextareaForm({
  placeholder,
  labelValue,
  textareaId,
  required = false,
  setStateValue,
  infoTxt,
  value,
  ...props
}: TextareaFormProps) {
  const [isFocus, setIsFocus] = useState(false)
  const { uuid } = useCreateUUID()

  const handleChange = (e: any) => {
    setStateValue(e.target.value)
  }

  return (
    <FormControl id={textareaId} isRequired={required} marginTop={{ lg: '0rem' }}>
      <InputLabel infoTxt={infoTxt} inputId={textareaId} isFocus={isFocus} key={textareaId}>
        {labelValue}
      </InputLabel>
      <Textarea
        key={uuid}
        _hover={{ borderColor: blue.$500 }}
        id={textareaId}
        name={textareaId}
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleChange}
        overflowY="hidden"
        required={true}
        borderWidth="2px"
        value={value}
        height={{ base: isFocus ? '6rem' : '4rem', lg: isFocus ? '7rem' : '5rem' }}
        transition={transitionProperty('all')}
        {...props}
      ></Textarea>
    </FormControl>
  )
}
