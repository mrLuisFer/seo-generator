import SEO from 'components/common/SEO';
import { Box } from '@chakra-ui/react';
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import SocialSidebar from 'components/SocialSidebar';

export default function Main() {
  return (
    <Box display="grid" gridTemplateColumns={{ sm: '', md: '250px 480px 1fr' }} flexDirection="column">
      <SEO
        title="Seo Generator - Generate, Edit and Preview your SEO"
        description="A web page made with Typescript and React (On Next.js) to generate, edit and preview your Meta tags in the easiest way"
      />
      <SocialSidebar />
      <LeftSidebar />
      <RightSidebar />
    </Box>
  );
}
