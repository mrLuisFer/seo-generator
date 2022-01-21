import { Box } from '@chakra-ui/react'
import { gray } from 'lib/chakraColors'
import MetaTags from './MetaTags'
import HeaderSidebar from './HeaderSidebar'
import SidebarTitlesCtxProvider, { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'

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
  const { showTitles } = useSidebarTitlesCtx()
  console.log(showTitles)
  // TODO: add fixed position for the sidebar
  return (
    <SidebarTitlesCtxProvider>
      <Box
        as="section"
        bg={gray.$700}
        w="100%"
        h="max-content"
        gridColumn="span 2"
        borderRadius="15px"
        p="1.5rem"
        overflowX="auto"
        boxShadow="md"
      >
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
      </Box>
    </SidebarTitlesCtxProvider>
  )
}
