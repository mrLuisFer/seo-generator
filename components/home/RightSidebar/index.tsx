import { Box } from '@chakra-ui/react'
import { gray } from 'utils/chakraColors'
import MetaTags from './MetaTags'
import HeaderSidebar from './HeaderSidebar'
import SidebarTitlesCtxProvider, { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'

export default function RightSidebar() {
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
        <MetaTags />
      </Box>
    </SidebarTitlesCtxProvider>
  )
}
