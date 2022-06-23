import SEO from 'components/common/SEO'
import { Box } from '@chakra-ui/react'
import LeftSidebar from 'components/LeftSidebar'
import RightSidebar from 'components/RightSidebar'
import SocialSidebar from 'components/SocialSidebar'

export default function Main() {
  return (
    <>
      <SEO title="Home" description="The easiest way to create the important meta tags for your web page" />
      <Box
        display={{ sm: 'flex', md: 'grid' }}
        gridTemplateColumns={{ sm: '', md: '' }}
        gridGap="2rem"
        flexDirection="column"
      >
        <SocialSidebar />
        <LeftSidebar />
        <RightSidebar />
      </Box>
    </>
  )
}
