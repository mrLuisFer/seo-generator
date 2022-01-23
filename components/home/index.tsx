import { Box } from '@chakra-ui/react'
import { useSidebarCtx } from 'hooks/useSidebarCtx'
import ShowSidebarBtn from './RightSidebar/HeaderSidebar/HidesidebarBtn/ShowSidebarBtn'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

export default function Home() {
  const { hideSidebar } = useSidebarCtx()
  const gridStyle = hideSidebar ? '1fr 1fr 1fr 50px' : '1fr 1fr 1fr 1fr 1fr'

  return (
    <Box display="grid" gridTemplateColumns={gridStyle} gridGap="2rem">
      <LeftSidebar />
      {!hideSidebar ? <RightSidebar /> : <ShowSidebarBtn />}
    </Box>
  )
}
