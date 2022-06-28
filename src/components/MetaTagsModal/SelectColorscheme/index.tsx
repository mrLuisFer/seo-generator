import { Flex } from '@chakra-ui/react';
import { useColorschemeCtx } from 'context/HighlightColorschemeCtx';
import Select from 'react-select';
import themes from './themes';

export default function SelectColorscheme() {
  const { setColorscheme } = useColorschemeCtx();

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: '#000',
      border: '1px solid',
      borderColor: state.isFocused ? '#2a81fb' : 'transparent',
    }),
    control: (provided: any) => ({
      ...provided,
      background: 'transparent',
      width: '150px',
      borderRadius: '7px',
      borderColor: '#C7D3D9',
    }),
    container: (provided: any) => ({
      ...provided,
      background: 'transparent',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#ffffff',
    }),
  };

  return (
    <Flex alignItems="center" gridGap="1rem">
      <Select
        name="select-theme"
        styles={customStyles}
        id="select-theme"
        options={themes}
        onChange={(e) => setColorscheme(e)}
      />
    </Flex>
  );
}
