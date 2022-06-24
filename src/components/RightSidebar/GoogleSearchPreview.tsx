import PreviewTittle from './PreviewTittle';
import { Box, Text } from '@chakra-ui/react';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function GoogleSearchPreview() {
  // TODO: change for the input states context
  return (
    <>
      <PreviewTittle title="Google" />
      <Box m="0.5rem 0 1.5rem">
        <Text color="#1a0dab" cursor="pointer" fontSize="1rem" _hover={{ textDecoration: 'underline' }}>
          Seo Generator - Generate, Edit and Preview
        </Text>
        <Text color="#006621" display="flex" alignItems="center" fontSize="0.9rem">
          https://seo-generator.vercel.app/
          <IoMdArrowDropdown />
        </Text>
        <Text color="#545454" fontWeight="normal" fontSize="0.9rem">
          Some description about the website.
        </Text>
      </Box>
    </>
  );
}
