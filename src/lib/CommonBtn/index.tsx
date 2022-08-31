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
      transition={transitionProperty()}
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="transparent"
      border="2px solid"
      borderColor="transparent"
      color={useColorModeValue('gray.800', 'white')}
      boxShadow="xs"
      fontSize="1.5rem"
      cursor="default"
      _hover={{ borderColor: 'fill.300', background: 'fill.300', color: 'white', ...hoverProps }}
      {...props}
    >
      {children}
    </Button>
  );
}
