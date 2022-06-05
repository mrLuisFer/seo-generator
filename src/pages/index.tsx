import SEO from 'components/common/SEO'
import { Box } from '@chakra-ui/react'
import { useSidebarCtx } from 'hooks/useSidebarCtx'
import ShowSidebarBtn from 'components/RightSidebar/MetaTagsSection/HeaderSidebar/HidesidebarBtn/ShowSidebarBtn'
import LeftSidebar from 'components/LeftSidebar'
import RightSidebar from 'components/RightSidebar'

export default function Main() {
  const { hideSidebar } = useSidebarCtx()
  const gridStyle = hideSidebar ? '1fr 1fr 1fr 100px' : '1fr 1fr 1fr 1fr'

  return (
    <>
      <SEO title="Home" description="The easiest way to create the important meta tags for your web page" />
      <Box display={{sm: "flex", md: "grid"}} gridTemplateColumns={{sm: "", md: gridStyle}} gridGap="2rem" flexDirection={{base: "column", md: ""}}>
        <LeftSidebar />
        {hideSidebar ? <ShowSidebarBtn /> : <RightSidebar />}
      </Box>
    </>
  )
}
