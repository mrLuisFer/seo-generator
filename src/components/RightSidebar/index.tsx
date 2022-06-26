import {Box, Heading, Button, useColorModeValue} from '@chakra-ui/react';
import {RiCodeSSlashFill} from 'react-icons/ri';
import GoogleSearchPreview from './GoogleSearchPreview';
import FacebookPreview from './FacebookPreview';
import TwitterPreview from './TwitterPreview';
import LinkedInPreview from "./LinkedIn"
import {useSocialPreviewStates} from "hooks/useSocialPreviewStates"
import PinterestPreview from "./PinterestPreview"

export default function RightSidebar() {
  const {googlePreview, twitterPreview, facebookPreview, linkedinPreview, pinterestPreview, discordPreview, slackPreview} = useSocialPreviewStates()

  return (
    <Box as="section" marginTop={{base: '2rem', md: '0'}} p="1rem 1.5rem">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h2" fontSize="1rem" m="0">
          Preview
        </Heading>
        <Button
          bg={useColorModeValue('white', 'fill.300')}
          color={useColorModeValue('fill.300', 'white')}
          border="1.5px solid"
          borderColor={useColorModeValue('border.100', 'fill.300')}
          fontWeight="normal"
          display="flex"
          gridGap="0.5rem"
          transition="0.2s ease"
          _hover={{
            background: 'fill.300',
            color: 'white',
            borderColor: 'fill.300',
            filter: useColorModeValue('', 'brightness(1.2)'),
          }}
        >
          <RiCodeSSlashFill/>
          Generate MetaTags
        </Button>
      </Box>
      <Box mt="1.5rem">
        {googlePreview && <GoogleSearchPreview/>}
        {facebookPreview && <FacebookPreview/>}
        {twitterPreview && <TwitterPreview/>}
        {linkedinPreview && <LinkedInPreview/>}
        {pinterestPreview && <PinterestPreview/>}
      </Box>
    </Box>
  );
}
