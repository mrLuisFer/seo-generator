import { Box, Heading, VStack, useColorModeValue } from '@chakra-ui/react';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn, FaPinterestP, FaDiscord, FaFacebookF } from 'react-icons/fa';
import {BsGoogle, BsSlack} from "react-icons/bs"
import { useSocialPreviewStates } from 'hooks/useSocialPreviewStates';
import SocialBtn from "./SocialBtn"

export default function SocialSidebar() {
  const {
    twitterPreview,
    linkedinPreview,
    pinterestPreview,
    discordPreview,
    facebookPreview,
    googlePreview,
    slackPreview,
    setTwitterPreview,
    setLinkedinPreview,
    setPinterestPreview,
    setDiscordPreview,
    setFacebookPreview,
    setGooglePreview,
    setSlackPreview,
  } = useSocialPreviewStates();
  return (
    <Box as="section" borderRight="1px solid" borderColor={useColorModeValue('border.100', 'gray.700')} pt="1rem">
      <Heading as="h2" fontSize="1rem" m="0 1.5rem 1rem">
        Social Preview
      </Heading>
      <VStack alignItems="flex-start" spacing="0.1rem" p="0 0.8rem">
        <SocialBtn setState={setGooglePreview} state={googlePreview} icon={<BsGoogle />} text="Google" />
        <SocialBtn setState={setFacebookPreview} state={facebookPreview} icon={<FaFacebookF />} text="Facebook" />
        <SocialBtn setState={setTwitterPreview} state={twitterPreview} icon={<GrTwitter />} text="Twitter" />
        <SocialBtn setState={setLinkedinPreview} state={linkedinPreview} icon={<FaLinkedinIn />} text="Linkedin" />
        <SocialBtn setState={setPinterestPreview} state={pinterestPreview} icon={<FaPinterestP />} text="Pinterest" />
        <SocialBtn setState={setDiscordPreview} state={discordPreview} icon={<FaDiscord />} text="Discord" />
        <SocialBtn setState={setSlackPreview} state={slackPreview} icon={<BsSlack />} text="Slack" />
      </VStack>
    </Box>
  );
}
