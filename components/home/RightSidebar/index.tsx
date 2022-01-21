import { Box } from '@chakra-ui/react'
import { gray } from 'lib/chakraColors'
import MetaTags from './MetaTags'
import HeaderSidebar from './HeaderSidebar'
import SidebarTitlesCtxProvider from 'context/SidebarTitlesCtx'

interface RightSidebarProps {
  [stateValue: string]: string
}

export default function RightSidebar({
  descriptionTextarea,
  imgInput,
  keywordsInput,
  ogTypeInput,
  titleInput,
  author,
  copyright,
  ogUrl,
  rating,
  robots,
}: RightSidebarProps) {
  return (
    <Box
      as="section"
      bg={gray.$700}
      w="100%"
      h="100%"
      gridColumn="span 2"
      borderRadius="15px"
      p="1.5rem"
      boxShadow="md"
      position="relative"
    >
      <SidebarTitlesCtxProvider>
        <HeaderSidebar />
        <MetaTags
          descriptionTextarea={descriptionTextarea}
          imgInput={imgInput}
          keywordsInput={keywordsInput}
          ogTypeInput={ogTypeInput}
          titleInput={titleInput}
          author={author}
          copyright={copyright}
          ogUrl={ogUrl}
          rating={rating}
          robots={robots}
        />
      </SidebarTitlesCtxProvider>
    </Box>
  )
}
