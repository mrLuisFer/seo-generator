import { Button, useColorModeValue } from '@chakra-ui/react';
import { transitionProperty } from 'utils/transitionProperty';

interface HeaderBtnProps {
  children: any;
  hoverProps?: any;
  [x: string]: any;
}

export default function HeaderBtn({ children, hoverProps, ...props }: HeaderBtnProps) {
  return (
    <Button
      p="4px"
      borderRadius="10px"
      _hover={{ borderColor: 'fill.300', ...hoverProps }}
      transition={transitionProperty()}
      display="inline-block"
      background="transparent"
      border="2px solid"
      borderColor={useColorModeValue('gray.400', 'gray.600')}
      color={useColorModeValue('gray.800', 'white')}
      boxShadow="xs"
      fontSize="1.5rem"
      cursor="default"
      {...props}
    >
      {children}
    </Button>
  );
}
