import PreviewTittle from './PreviewTittle';
import { Box, Img, Text } from '@chakra-ui/react';

export default function TwitterPreview() {
  return (
    <>
      <PreviewTittle title="Twitter" />
      <Box m="0.5rem 0 1rem" maxW="400px" mt="0.5rem" cursor="pointer" borderRadius="7px">
        <Img
          display="block"
          border="1px solid"
          borderColor="border.100"
          borderRadius="7px 7px 0 0"
          src="https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <Box
          bg="white"
          p="0.4rem 0.8rem"
          border="1px solid"
          borderColor="border.100"
          transition="0.1s ease"
          borderRadius="0 0 7px 7px"
          _hover={{ background: 'gray.100' }}
        >
          <Text fontWeight="semibold" fontSize="0.8rem">
            Seo Generator - Generate, Edit and Preview
          </Text>
          <Text color="#606770" fontSize="0.9rem">
            Some description about the website.
          </Text>
          <Text textTransform="lowercase" fontSize="0.8rem" color="gray.600" fontWeight="normal">
            seo-generator.vercel.app
          </Text>
        </Box>
      </Box>
    </>
  );
}
