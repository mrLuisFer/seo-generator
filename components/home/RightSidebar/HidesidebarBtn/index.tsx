import { Box, Flex } from '@chakra-ui/react'
import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs'
import HoverPopup from 'components/common/HoverPopup'
import { transitionProperty } from 'lib/transitionProperty'
import { useSidebarCtx } from 'hooks/useSidebarCtx'

export default function HidesidebarBtn() {
  const { setHideSidebar } = useSidebarCtx()

  return (
    <Flex justify="flex-end">
      <Box
        display="inline-block"
        cursor="pointer"
        opacity="0.5"
        _hover={{ opacity: 1 }}
        transition={transitionProperty()}
        onClick={() => setHideSidebar(true)}
      >
        <HoverPopup text="Hide sidebar preview" width="100px">
          <BsReverseLayoutSidebarInsetReverse size="1.5rem" />
        </HoverPopup>
      </Box>
    </Flex>
  )
}
