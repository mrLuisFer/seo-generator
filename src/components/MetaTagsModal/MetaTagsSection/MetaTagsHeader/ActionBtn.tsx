import { Box, ChakraProps, useColorModeValue } from '@chakra-ui/react';
import { transitionProperty } from 'utils/transitionProperty';

type HeaderBtnProps = {
  children: any;
  textColor?: string;
  [props: string]: ChakraProps | any;
};

export default function ActionBtn({ children, textColor, ...props }: HeaderBtnProps) {
  return (
    <Box
      as="button"
      display="flex"
      role="button"
      alignItems="center"
      justifyContent="center"
      cursor="default"
      opacity="0.5"
      position="relative"
      transition={transitionProperty()}
      color={textColor || useColorModeValue('gray.700', 'gray.200')}
      {...props}
    >
      {children}
    </Box>
  );
}
