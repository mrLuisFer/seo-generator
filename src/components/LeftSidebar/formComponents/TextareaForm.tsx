import { Dispatch, SetStateAction, useState, forwardRef } from 'react';
import { Textarea, FormControl } from '@chakra-ui/react';
import { blue } from 'utils/chakraColors';
import { transitionProperty } from 'utils/transitionProperty';
import InputLabel from './InputLabel';
import { useCreateUUID } from 'hooks/useCreateUUID';

interface TextareaFormProps {
  placeholder: string;
  labelValue: string;
  textareaId: string;
  required?: boolean;
  infoTxt: string;
  setStateValue: Dispatch<SetStateAction<string>>;
  value: string;
  [x: string]: any;
}

const TextareaForm = forwardRef<any, TextareaFormProps>(
  ({ placeholder, labelValue, textareaId, required = false, setStateValue, infoTxt, value, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);
    const { uuid } = useCreateUUID();

    return (
      <FormControl id={textareaId} isRequired={required} marginTop={{ lg: '0rem' }}>
        <InputLabel infoTxt={infoTxt} inputId={textareaId} isFocus={isFocus} key={textareaId}>
          {labelValue}
        </InputLabel>
        <Textarea
          key={uuid}
          _hover={{ borderColor: blue.$500 }}
          _focus={{ height: '6rem' }}
          id={textareaId}
          name={textareaId}
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          overflowY="hidden"
          required={true}
          borderWidth="2px"
          height={{ base: '4rem', lg: '5rem' }}
          transition={transitionProperty('all')}
          {...props}
          ref={ref}
        ></Textarea>
      </FormControl>
    );
  }
);

export default TextareaForm;
