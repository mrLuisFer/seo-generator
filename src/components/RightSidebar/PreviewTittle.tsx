import { Text, Box, useColorModeValue } from '@chakra-ui/react';

export default function PreviewTittle({ title }) {
  return (
    <Box display="flex" alignItems="center" gridGap="1rem" userSelect="none">
      <Text
        textTransform="capitalize"
        fontSize="0.9rem"
        color="border.100"
        fontWeight="semibold"
        opacity={useColorModeValue('1', '0.3')}
      >
        {title}
      </Text>
      <Box
        h="1.5px"
        borderRadius="7px"
        bg="border.100"
        w="100%"
        display="block"
        opacity={useColorModeValue('0.5', '0.1')}
      ></Box>
    </Box>
  );
}
