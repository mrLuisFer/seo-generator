import { useState } from 'react';
import PreviewTittle from './PreviewTittle';
import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import { useLabelHelpers } from 'hooks/useLabelHelpers';
import FadeIn from "components/common/Transitions/FadeIn"

export default function TwitterPreview() {
  const [hover, setHover] = useState<boolean>(false);
  const { titleInput, descriptionTextarea, ogUrl } = useGetInputStates();
  const { capitalizedText } = useLabelHelpers();

  return (
    <FadeIn>
      <PreviewTittle title="Twitter" />
      <Box
        m="0.5rem 0 1rem"
        maxW="400px"
        mt="0.5rem"
        cursor="default"
        borderRadius="7px"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Img
          display="block"
          border="1px solid"
          borderColor={hover ? 'fill.300' : 'border.100'}
          borderRadius="7px 7px 0 0"
          src="https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <Box
          bg={useColorModeValue('white', 'gray.300')}
          p="0.4rem 0.8rem"
          border="1px solid"
          borderTop="none"
          borderColor={hover ? 'fill.300' : 'border.100'}
          transition="0.1s ease"
          borderRadius="0 0 7px 7px"
          _hover={{ background: useColorModeValue('gray.100', 'gray.200') }}
        >
          <Text
            fontWeight="semibold"
            fontSize="0.8rem"
            color="gray.900"
            textTransform={capitalizedText ? 'capitalize' : 'none'}
          >
            {titleInput.trim().length > 1 ? titleInput : 'Seo Generator - Generate, Edit and Preview'}
          </Text>
          <Text color="#606770" fontSize="0.9rem">
            {descriptionTextarea.trim().length > 1 ? descriptionTextarea : 'Some description about the website.'}
          </Text>
          <Text textTransform="lowercase" fontSize="0.8rem" fontWeight="normal" color="gray.600">
            {ogUrl.trim().length > 1 ? `${ogUrl}`.trimStart().trimEnd() : 'seo-generator.vercel.app'}
          </Text>
        </Box>
      </Box>
    </FadeIn>
  );
}
