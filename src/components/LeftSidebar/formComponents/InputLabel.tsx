import { FormLabel, Flex, Button, useColorModeValue, Box } from '@chakra-ui/react';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import ClickPopup from 'lib/ClickPopup';
import { transitionProperty } from 'utils/transitionProperty';

interface InputLabelProps {
  children?: any;
  isFocus: boolean;
  inputId: string;
  infoTxt: string;
  value: string;
  [props: string]: any;
}

export default function InputLabel({ isFocus, inputId, infoTxt, children, value, ...props }: InputLabelProps) {
  const labelHoverColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Flex align="center" justify="space-between">
      <FormLabel
        _hover={{ color: labelHoverColor }}
        display="inline-block"
        fontWeight="semibold"
        htmlFor={inputId}
        userSelect="none"
        margin="0"
        fontSize="0.85rem"
        color={isFocus ? labelHoverColor : 'gray.400'}
        {...props}
      >
        {value}
      </FormLabel>
      <Box display="flex" alignItems="center">
        {children}
        <ClickPopup text={infoTxt} width="220px" height="auto">
          <Button
            _hover={{ background: 'fill.300', color: 'white', opacity: 1 }}
            p="0rem"
            m="0.4rem"
            size="sm"
            title="Click to know what's this attribute"
            bg="transparent"
            opacity="0.2"
            transition={transitionProperty()}
            cursor="default"
          >
            <IoMdInformationCircleOutline size="1.5em" />
          </Button>
        </ClickPopup>
      </Box>
    </Flex>
  );
}
