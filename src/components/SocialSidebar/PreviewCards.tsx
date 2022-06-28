import { VStack } from '@chakra-ui/react';
import { BsGoogle, BsSlack } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn, FaPinterestP, FaDiscord, FaFacebookF } from 'react-icons/fa';
import SocialBtn from './SocialBtn';
import { useSocialPreviewStates } from 'hooks/useSocialPreviewStates';

export default function PreviewCards() {
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
    <VStack alignItems="flex-start" spacing="0.1rem" p="0 0.8rem">
      <SocialBtn setState={setGooglePreview} state={googlePreview} icon={<BsGoogle />} text="Google" />
      <SocialBtn setState={setFacebookPreview} state={facebookPreview} icon={<FaFacebookF />} text="Facebook" />
      <SocialBtn setState={setTwitterPreview} state={twitterPreview} icon={<GrTwitter />} text="Twitter" />
      <SocialBtn setState={setLinkedinPreview} state={linkedinPreview} icon={<FaLinkedinIn />} text="Linkedin" />
      <SocialBtn
        setState={setPinterestPreview}
        state={pinterestPreview}
        icon={<FaPinterestP />}
        text="Pinterest"
        showWarnMsg={true}
      />
      <SocialBtn
        setState={setDiscordPreview}
        state={discordPreview}
        icon={<FaDiscord />}
        text="Discord"
        showWarnMsg={true}
      />
      <SocialBtn setState={setSlackPreview} state={slackPreview} icon={<BsSlack />} text="Slack" showWarnMsg={true} />
    </VStack>
  );
}
