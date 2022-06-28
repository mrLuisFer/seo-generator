import { Box, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { useColorModeValue } from '@chakra-ui/react';

interface SocialBtnProps {
  icon: JSX.Element;
  text: string;
  setState: Dispatch<SetStateAction<boolean>>;
  state: boolean;
  showWarnMsg?: boolean;
}
export default function SocialBtn({ icon, text, setState, state, showWarnMsg = false }: SocialBtnProps) {
  return (
    <Box
      as="button"
      title={showWarnMsg ? "This preview is disable" : `Click to toggle ${text} preview`}
      display="flex"
      alignItems="center"
      gridGap="0.5rem"
      fontSize="1.1rem"
      width="100%"
      p="0.5rem"
      borderRadius="7px"
      cursor="default"
      onClick={() => setState((prevState: boolean) => !prevState)}
      _hover={{ background: 'fill.100' }}
    >
      <Box
        p="0.5rem"
        transition="all 0.2s ease"
        bg={state && !showWarnMsg ? 'fill.300' : useColorModeValue('gray.300', 'gray.700')}
        borderRadius="50%"
        fontSize="1.5rem"
        color={useColorModeValue('white', state && !showWarnMsg ? 'white' : 'gray.400')}
      >
        {icon}
      </Box>
      <Text fontWeight="semibold">{text}</Text>
    </Box>
  );
}
