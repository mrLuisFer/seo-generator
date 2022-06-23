import SEO from 'components/common/SEO'
import { Box } from '@chakra-ui/react'
import LeftSidebar from 'components/LeftSidebar'
import RightSidebar from 'components/RightSidebar'

export default function Main() {
  const gridStyle = '1fr 1fr 1fr 1fr'

  return (
    <>
      <SEO title="Home" description="The easiest way to create the important meta tags for your web page" />
      <Box
        display={{ sm: 'flex', md: 'grid' }}
        gridTemplateColumns={{ sm: '', md: gridStyle }}
        gridGap="2rem"
        flexDirection="column"
      >
        <LeftSidebar />
        <RightSidebar />
      </Box>
    </>
  )
}
