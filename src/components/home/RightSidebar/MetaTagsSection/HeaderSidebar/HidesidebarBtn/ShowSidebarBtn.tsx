import { Box, Flex } from '@chakra-ui/react'
import { CgSidebarRight } from 'react-icons/cg'
import HoverPopup from 'lib/HoverPopup'
import { useSidebarCtx } from 'hooks/useSidebarCtx'

export default function ShowSidebarBtn() {
  const { setHideSidebar } = useSidebarCtx()

  return (
    <Flex direction="column">
      <Box
        mt="1rem"
        opacity="0.6"
        _hover={{ opacity: 1 }}
        display="inline-block"
        cursor="pointer"
        onClick={() => setHideSidebar(false)}
      >
        <HoverPopup text="Show sidebar preview" width="100px">
          <CgSidebarRight size="2.5rem" />
        </HoverPopup>
      </Box>
    </Flex>
  )
}
