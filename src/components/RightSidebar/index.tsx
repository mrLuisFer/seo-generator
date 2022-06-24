import { createRef, RefObject } from 'react';
import { Box, Heading, Button, useColorModeValue } from '@chakra-ui/react';
import { useDarkMode } from 'hooks/useDarkMode';
import MetaTags from './MetaTagsSection/MetaTags';
import HeaderSidebar from './MetaTagsSection/HeaderSidebar';
import ResourcesSection from './ResourcesSection';
import FadeIn from 'components/common/Transitions/FadeIn';
import { RiCodeSSlashFill } from 'react-icons/ri';

export default function RightSidebar() {
  const { isDarkMode } = useDarkMode();

  const copyBtnRef: RefObject<HTMLElement> = createRef<HTMLElement>();

  const handleCopyText = () => {
    const nodeValue: string = copyBtnRef.current.innerText;
    navigator.clipboard.writeText(nodeValue);
  };

  return (
    <Box as="section" marginTop={{ base: '2rem', md: '0' }} p="1rem 1.5rem">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h2" fontSize="1rem" m="0">
          Preview
        </Heading>
        <Button
          bg={useColorModeValue('white', 'fill.300')}
          color={useColorModeValue('fill.300', 'white')}
          border="1.5px solid"
          borderColor={useColorModeValue('border.100', 'fill.300')}
          fontWeight="normal"
          display="flex"
          gridGap="0.5rem"
          transition="0.2s ease"
          _hover={{
            background: 'fill.300',
            color: 'white',
            borderColor: 'fill.300',
            filter: useColorModeValue('', 'brightness(1.2)'),
          }}
        >
          <RiCodeSSlashFill />
          Generate MetaTags
        </Button>
      </Box>
      <Box
        w="100%"
        h="max-content"
        borderRadius={'1.5rem'}
        p={0}
        boxShadow={isDarkMode ? 'md' : 'xl'}
        position="relative"
      >
        <FadeIn>
          <HeaderSidebar copyFunc={handleCopyText} />
          <MetaTags ref={copyBtnRef} />
        </FadeIn>
      </Box>
      <ResourcesSection />
    </Box>
  );
}
