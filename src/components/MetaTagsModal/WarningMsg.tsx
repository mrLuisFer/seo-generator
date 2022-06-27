import { Box, Text, useColorModeValue} from '@chakra-ui/react';
import { IoWarningOutline } from 'react-icons/io5';

export default function WarningMsg() {
  return (
    <Box
      my="1rem"
      display="flex"
      alignItems="center"
      p="0.7rem"
      justifyContent="center"
      w="100%"
      border="2px solid"
      borderColor={useColorModeValue("gray.800", "gray.700")}
      borderRadius="9px"
      transition="0.2s ease-out"
      _hover={{ borderColor: 'fill.300' }}
    >
      <Text color="fill.300" pr="1rem">
        <IoWarningOutline size="3rem" />
      </Text>
      <Box>
        <Text color={useColorModeValue("gray.900", "white")}>
          <Text as="span" fontWeight="semibold">
            Warning:{' '}
          </Text>
          Be sure you have your image on a CMS or host.
        </Text>
      </Box>
    </Box>
  );
}
