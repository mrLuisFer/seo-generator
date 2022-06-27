import SEO from 'components/common/SEO';
import { Box } from '@chakra-ui/react';
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import SocialSidebar from 'components/SocialSidebar';

export default function Main() {
  return (
    <Box display="grid" gridTemplateColumns={{ sm: '', md: '250px 480px 1fr' }} flexDirection="column">
      <SEO title="Home" description="The easiest way to create the important meta tags for your web page" />
      <SocialSidebar />
      <LeftSidebar />
      <RightSidebar />
    </Box>
  );
}
