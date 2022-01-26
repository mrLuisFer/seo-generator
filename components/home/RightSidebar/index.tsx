import { createRef, RefObject } from 'react'
import { Box, Fade } from '@chakra-ui/react'
import { gray } from 'utils/chakraColors'
import MetaTags from './MetaTags'
import HeaderSidebar from './HeaderSidebar'
import SidebarTitlesCtxProvider from 'context/SidebarTitlesCtx'
import { useSidebarCtx } from 'hooks/useSidebarCtx'

export default function RightSidebar() {
  const { hideSidebar } = useSidebarCtx()

  const copyBtnRef: RefObject<HTMLElement> = createRef<HTMLElement>()

  const handleCopyText = () => {
    const nodeValue: string = copyBtnRef.current.innerText
    navigator.clipboard.writeText(nodeValue)
  }

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
        boxShadow="md"
        position="relative"
      >
        <Fade in={!hideSidebar}>
          <HeaderSidebar copyFunc={handleCopyText} />
          <MetaTags ref={copyBtnRef} />
        </Fade>
      </Box>
    </SidebarTitlesCtxProvider>
  )
}
