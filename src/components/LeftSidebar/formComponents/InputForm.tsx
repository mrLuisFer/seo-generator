import { ChangeEvent, Dispatch, SetStateAction, useState, forwardRef } from 'react';
import { FormControl, Input } from '@chakra-ui/react';
import { blue } from 'utils/chakraColors';
import { transitionProperty } from 'utils/transitionProperty';
import InputLabel from './InputLabel';
import { useCreateUUID } from 'hooks/useCreateUUID';

interface InputFormProps {
  required?: boolean;
  inputId: string;
  placeholder: string;
  labelValue?: string;
  inputheight?: string | number;
  inputwidth?: string | number;
  inputType?: string;
  state?: string;
  infoTxt?: string;
  value: string;
  [x: string]: any;
}

const InputForm = forwardRef<any, InputFormProps>(
  (
    {
      required = false,
      inputId,
      placeholder,
      labelValue = '',
      inputheight,
      inputwidth,
      infoTxt = '',
      inputType = 'text',
      value = '',
      ...props
    },
    ref
  ) => {
    const [isFocus, setIsFocus] = useState(false);
    const { uuid } = useCreateUUID();

    return (
      <FormControl id={inputId} isRequired={required} marginTop={{ lg: '0rem' }}>
        {labelValue.length > 1 && (
          <InputLabel userSelect="none" infoTxt={infoTxt} inputId={inputId} isFocus={isFocus} key={inputId}>
            {labelValue}
          </InputLabel>
        )}
        <Input
          key={uuid}
          ref={ref}
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
          {...props}
        />
      </FormControl>
    );
  }
);

export default InputForm;
