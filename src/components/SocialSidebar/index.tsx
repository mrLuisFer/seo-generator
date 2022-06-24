import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn, FaPinterestP, FaDiscord } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';

export default function SocialSidebar() {
  return (
    <Box as="section" borderRight="1px solid" borderColor="border.100" pt="1rem">
      <Heading as="h2" fontSize="1rem" m="0 1.5rem 1rem">
        Social
      </Heading>
      <VStack alignItems="flex-start" spacing="0.5rem" p="0 0.8rem">
        <SocialBtn url="" icon={<GrTwitter />} text="Twitter" />
        <SocialBtn url="" icon={<FaLinkedinIn />} text="Linkedin" />
        <SocialBtn url="" icon={<FaPinterestP />} text="Pinterest" />
        <SocialBtn url="" icon={<FaDiscord />} text="Discord" />
        <SocialBtn url="" icon={<VscGithubAlt />} text="Github" />
      </VStack>
    </Box>
  );
}

interface SocialBtnProps {
  icon: JSX.Element;
  text: string;
  url: string;
}

function SocialBtn({ icon, text, url }: SocialBtnProps) {
  return (
    <Box
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      alignItems="center"
      gridGap="0.5rem"
      fontSize="1.1rem"
      width="100%"
      p="0.5rem"
      borderRadius="7px"
      _hover={{ background: 'fill.100' }}
    >
      <Box p="0.5rem" bg="fill.300" borderRadius="50%" fontSize="1.5rem" color="white">
        {icon}
      </Box>
      <Text fontWeight="semibold">{text}</Text>
    </Box>
  );
}
