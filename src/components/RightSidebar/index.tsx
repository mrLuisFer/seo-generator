import { createRef, RefObject } from 'react'
import { Box } from '@chakra-ui/react'
import { useDarkMode } from 'hooks/useDarkMode'
import MetaTags from './MetaTagsSection/MetaTags'
import HeaderSidebar from './MetaTagsSection/HeaderSidebar'
import ResourcesSection from './ResourcesSection'
import FadeIn from 'components/common/Transitions/FadeIn'

export default function RightSidebar() {
  const { isDarkMode } = useDarkMode()

  const copyBtnRef: RefObject<HTMLElement> = createRef<HTMLElement>()

  const handleCopyText = () => {
    const nodeValue: string = copyBtnRef.current.innerText
    navigator.clipboard.writeText(nodeValue)
  }

  return (
    <Box
      as="section"
      gridColumn={{ base: '', md: 'span 2' }}
      display="flex"
      gridGap="1rem"
      flexDirection="column"
      marginTop={{ base: '2rem', md: '0' }}
    >
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
  )
}
