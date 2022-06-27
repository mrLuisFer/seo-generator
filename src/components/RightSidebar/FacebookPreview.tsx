import PreviewTittle from './PreviewTittle';
import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import { useLabelHelpers } from 'hooks/useLabelHelpers';
import FadeIn from "components/common/Transitions/FadeIn"

export default function FacebookPreview() {
  const { titleInput, descriptionTextarea, author, ogUrl } = useGetInputStates();
  const { capitalizedText } = useLabelHelpers();

  return (
    <FadeIn>
      <PreviewTittle title="Facebook" />
      <Box m="0.5rem 0 1.5rem" maxW="400px" mt="0.5rem" cursor="default" borderRadius="2px">
        <Img
          display="block"
          borderRadius="2px 2px 0 0"
          border="1px solid"
          borderColor={useColorModeValue('border.100', 'gray.400')}
          src="https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <Box
          bg={useColorModeValue('gray.100', 'gray.300')}
          borderRadius="0 0 2px 2px"
          p="0.4rem 0.8rem"
          border="1px solid"
          borderColor="border.100"
        >
          <Text textTransform="uppercase" fontSize="0.8rem" color="gray.600" fontWeight="normal">
            {ogUrl.trim().length > 1 ? `${ogUrl}`.trimStart().trimEnd() : 'seo-generator.vercel.app'}
          </Text>
          <Text textTransform={capitalizedText ? 'capitalize' : 'none'} fontWeight="semibold" color="gray.900">
            {titleInput.trim().length > 1 ? titleInput : 'Seo Generator - Generate, Edit and Preview'}
          </Text>
          <Text color="#606770" fontSize="0.9rem">
            {descriptionTextarea.trim().length > 1 ? descriptionTextarea : 'Some description about the website.'}
          </Text>
        </Box>
      </Box>
    </FadeIn>
  );
}
