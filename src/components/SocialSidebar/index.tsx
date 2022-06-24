import { Box, Heading } from '@chakra-ui/react';

export default function SocialSidebar() {
  return (
    <Box as="section" borderRight="1.5px solid" borderColor="border.100">
      <Heading as="h2" fontSize="1rem" m="1rem 0">
        Social
      </Heading>
    </Box>
  );
}
