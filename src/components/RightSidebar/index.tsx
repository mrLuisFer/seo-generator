import { Box } from '@chakra-ui/react';
import GoogleSearchPreview from './GoogleSearchPreview';
import FacebookPreview from './FacebookPreview';
import TwitterPreview from './TwitterPreview';
import LinkedInPreview from './LinkedIn';
import { useSocialPreviewStates } from 'hooks/useSocialPreviewStates';
import PinterestPreview from './PinterestPreview';
import Header from './Header';

export default function RightSidebar() {
  const {
    googlePreview,
    twitterPreview,
    facebookPreview,
    linkedinPreview,
    pinterestPreview,
    discordPreview,
    slackPreview,
  } = useSocialPreviewStates();

  return (
    <Box as="section" marginTop={{ base: '2rem', md: '0' }} p="1rem 1.5rem">
      <Header />
      <Box mt="1.5rem">
        {googlePreview && <GoogleSearchPreview />}
        {facebookPreview && <FacebookPreview />}
        {twitterPreview && <TwitterPreview />}
        {linkedinPreview && <LinkedInPreview />}
        {pinterestPreview && <PinterestPreview />}
      </Box>
    </Box>
  );
}
