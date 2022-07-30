import { Box } from '@chakra-ui/react';
import GoogleSearchPreview from './GoogleSearchPreview';
import FacebookPreview from './FacebookPreview';
import TwitterPreview from './TwitterPreview';
import LinkedInPreview from './LinkedIn';
import { useSocialPreviewStates } from 'hooks/useSocialPreviewStates';
import PinterestPreview from './PinterestPreview';
import Header from './Header';
import { useShowPreviewCtx } from 'context/ShowPreview';

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
  const { showPreview } = useShowPreviewCtx();

  return (
    <>
      {showPreview && (
        <Box as="section" marginTop={{ base: '2rem', md: '0' }} p="1rem 1.5rem">
          <Header />
          <Box mt="1.5rem">
            {/* TODO: add all posible social previews */}
            {googlePreview && <GoogleSearchPreview />}
            {facebookPreview && <FacebookPreview />}
            {twitterPreview && <TwitterPreview />}
            {linkedinPreview && <LinkedInPreview />}
            {pinterestPreview && <PinterestPreview />}
          </Box>
        </Box>
      )}
    </>
  );
}
