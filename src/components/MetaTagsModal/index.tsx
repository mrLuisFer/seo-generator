import { Dispatch, SetStateAction, useRef } from 'react';
import { Box, Button, Heading, useColorModeValue } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import MetaTags from './MetaTagsSection/MetaTags';
import FadeIn from 'components/common/Transitions/FadeIn';
import { SiSpringCreators } from 'react-icons/si';
import { nanoid } from 'nanoid';

interface MetaTagsModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MetatagsModal({ isOpen, setIsOpen }: MetaTagsModalProps) {
  const ref = useRef<HTMLDivElement>();

  const handleOutsideClick = (e) => {
    if (ref.current === e.target) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    typeof window !== 'undefined' && document.querySelector('body').classList.add('no-scroll');

    return (
      <Box
        position="fixed"
        inset="0"
        w="100vw"
        h="100vh"
        backgroundImage="linear-gradient(180deg, #2A81FB 0%, rgba(243,246,254,0.1) 100%)"
        zIndex="20"
        display="flex"
        justifyContent="center"
        overflow="hidden"
        alignItems="center"
        onClick={(e) => handleOutsideClick(e)}
        ref={ref}
      >
        <FadeIn>
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            w="70vw"
            h="600px"
            color="gray.900"
            borderRadius="9px"
            overflowY="scroll"
          >
            <Box display="flex" justifyContent="flex-end" p="1rem">
              <Button
                fontSize="1.5rem"
                color="gray.500"
                _hover={{ color: 'white', background: 'fill.300' }}
                onClick={() => setIsOpen(false)}
              >
                <MdClose />
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" color="fill.300" gridGap="0.5rem">
              <SiSpringCreators size="2.5rem" />
              <Heading as="h2" textAlign="center" fontSize="1.6rem" color={useColorModeValue('gray.900', 'gray.100')}>
                Your Meta Tags successfully created!
              </Heading>
            </Box>
            <MetaTags />
          </Box>
        </FadeIn>
      </Box>
    );
  }

  return <></>;
}
