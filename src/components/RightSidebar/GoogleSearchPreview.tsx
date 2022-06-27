import PreviewTittle from './PreviewTittle';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useGetInputStates } from 'hooks/useGetInputStates';
import { useLabelHelpers } from 'hooks/useLabelHelpers';
import FadeIn from "components/common/Transitions/FadeIn"

export default function GoogleSearchPreview() {
  const { titleInput, descriptionTextarea, author, ogUrl } = useGetInputStates();
  const { capitalizedText } = useLabelHelpers();

  return (
    <FadeIn>
      <PreviewTittle title="Google" />
      <Box
        m="0.5rem 0 1.5rem"
        p="0.8rem 5rem 0.8rem 0.5rem"
        display="inline-block"
        borderRadius="7px"
        _hover={{ background: useColorModeValue('rgba(237, 242, 247, 0.5)', 'rgba(45, 55, 72, 0.3)') }}
      >
        <Text
          color={useColorModeValue('#1a0dab', 'cyan.400')}
          cursor="default"
          fontSize="1rem"
          textTransform={capitalizedText ? 'capitalize' : 'none'}
          _hover={{ textDecoration: 'underline' }}
        >
          {titleInput.length > 1 ? titleInput : 'Seo Generator - Generate, Edit and Preview your SEO'}
        </Text>
        <Text color={useColorModeValue('#006621', 'green.400')} display="flex" alignItems="center" fontSize="0.9rem" textTransform="lowercase">
          {ogUrl.length > 1 ? `https://${ogUrl}/` : 'https://seo-generator.vercel.app/'}
          <IoMdArrowDropdown />
        </Text>
        <Text color={useColorModeValue('#545454', 'gray.400')} fontWeight="normal" fontSize="0.9rem">
          {descriptionTextarea.length > 1 ? descriptionTextarea : 'Some description about the website.'}
        </Text>
      </Box>
    </FadeIn>
  );
}
