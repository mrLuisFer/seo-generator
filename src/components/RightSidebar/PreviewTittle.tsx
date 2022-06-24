import { Text, Box } from '@chakra-ui/react';

export default function PreviewTittle({ title }) {
  return (
    <Box display="flex" alignItems="center" gridGap="1rem" userSelect="none">
      <Text textTransform="capitalize" fontSize="0.9rem" color="border.100" fontWeight="semibold">{title}</Text>
      <Box h="1.5px" opacity="0.5" borderRadius="7px" bg="border.100" w="100%" display="block"></Box>
    </Box>
  );
}
