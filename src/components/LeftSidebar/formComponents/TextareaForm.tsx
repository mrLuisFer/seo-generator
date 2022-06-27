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
  setState: Dispatch<SetStateAction<string>>;
  state: string;
  children: any;
  [x: string]: any;
}

const TextareaForm = forwardRef<any, TextareaFormProps>(
  ({ placeholder, labelValue, textareaId, required = false, setState, infoTxt, state, children, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);
    const { uuid } = useCreateUUID();

    return (
      <FormControl id={textareaId} isRequired={required} marginTop={{ lg: '0rem' }}>
        <InputLabel value={labelValue} infoTxt={infoTxt} inputId={textareaId} isFocus={isFocus} key={textareaId}>
          {children}
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
          value={state}
          onChange={(e) => setState(e.target.value)}
          {...props}
          ref={ref}
        ></Textarea>
      </FormControl>
    );
  }
);

export default TextareaForm;
