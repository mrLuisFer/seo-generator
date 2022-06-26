import { Box, Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn, FaPinterestP, FaDiscord } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';
import type { SocialPreviewCtxProps } from 'context/SocialPreview';
import { useSocialPreviewStates } from 'hooks/useSocialPreviewStates';
import { Dispatch, SetStateAction } from 'react';

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
      <VStack alignItems="flex-start" spacing="0.5rem" p="0 0.8rem">
        <SocialBtn setState={setTwitterPreview} state={twitterPreview} icon={<GrTwitter />} text="Twitter" />
        <SocialBtn setState={setLinkedinPreview} state={linkedinPreview} icon={<FaLinkedinIn />} text="Linkedin" />
        <SocialBtn setState={setPinterestPreview} state={pinterestPreview} icon={<FaPinterestP />} text="Pinterest" />
        <SocialBtn setState={setDiscordPreview} state={discordPreview} icon={<FaDiscord />} text="Discord" />
      </VStack>
    </Box>
  );
}

interface SocialBtnProps {
  icon: JSX.Element;
  text: string;
  setState: Dispatch<SetStateAction<boolean>>;
  state: boolean
}

function SocialBtn({ icon, text, setState, state }: SocialBtnProps) {
  console.log(`${text}: ${state}`)
  return (
    <Box
      as="button"
      display="flex"
      alignItems="center"
      gridGap="0.5rem"
      fontSize="1.1rem"
      width="100%"
      p="0.5rem"
      borderRadius="7px"
      onClick={() => setState((prevState: boolean) => !prevState)}
      _hover={{ background: 'fill.100' }}
    >
      <Box p="0.5rem" bg="fill.300" borderRadius="50%" fontSize="1.5rem" color="white">
        {icon}
      </Box>
      <Text fontWeight="semibold">{text}</Text>
    </Box>
  );
}
