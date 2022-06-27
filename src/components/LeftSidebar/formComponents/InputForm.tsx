import { Dispatch, SetStateAction, useState, forwardRef } from 'react';
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
  setState: Dispatch<SetStateAction<string>>;
  [x: string]: any;
}

/**
 * <h1>The children prop, is like a Extra Component's</h1>
 */
const InputForm = ({
  required = false,
  inputId,
  placeholder,
  labelValue = '',
  inputheight,
  inputwidth,
  infoTxt = '',
  inputType = 'text',
  value = '',
  state,
  setState,
  children,
  ...props
}: InputFormProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const { uuid } = useCreateUUID();

  return (
    <FormControl id={inputId} isRequired={required} marginTop={{ lg: '0rem' }}>
      {labelValue.length > 1 && (
        <InputLabel
          userSelect="none"
          infoTxt={infoTxt}
          inputId={inputId}
          isFocus={isFocus}
          value={labelValue}
          key={inputId}
        >
          {children}
        </InputLabel>
      )}
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
        value={state}
        onChange={(e) => setState(e.target.value)}
        pattern="[a-z]{3,10}"
        {...props}
      />
    </FormControl>
  );
};

export default InputForm;
