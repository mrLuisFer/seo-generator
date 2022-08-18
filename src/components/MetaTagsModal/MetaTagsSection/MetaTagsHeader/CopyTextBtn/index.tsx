import { MdContentCopy } from 'react-icons/md';
import { Fade, Text, Box } from '@chakra-ui/react';
import ActionBtn from '../ActionBtn';
import { useState } from 'react';
import { BsCheckAll } from 'react-icons/bs';

interface ICopyTextBtnProps {
  clickFunc: () => void;
}

export default function CopyTextBtn({ clickFunc }: ICopyTextBtnProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyFunc = () => {
    setIsCopied(true);
    clickFunc();
  };

  return (
    <Fade in={true}>
      <Box display="flex" alignItems="center" gridGap="0.7rem">
        <Text fontSize="0.9rem" color="white">
          Copy the code into your website {/* TODO: should use keyboard-css (?) and add some keyboard shortcuts ;) */}
          {/* https://github.com/shhdharmen/keyboard-css */}
          <Text
            as="code"
            fontFamily="monospace"
            p="0.2rem"
            border="2px solid"
            borderColor="gray.800"
            borderRadius="5px"
            color="gray.200"
            outline="none"
            boxShadow="2px 2px 1px 1px rgba(0, 0, 0, 0.3)"
            userSelect="none"
            cursor="default"
            transition="0.1s ease"
            mr="0.2rem"
            _hover={{
              boxShadow: '2px 2px 1px 2px rgba(0, 0, 0, 0.4)',
            }}
          >
            &lt;head&gt;
          </Text>{' '}
          section
        </Text>
        <ActionBtn
          onClick={handleCopyFunc}
          display="flex"
          alignItems="center"
          gridGap="0.2rem"
          fontWeight="semibold"
          p="0.5rem"
          borderRadius="9px"
          borderColor="border.100"
          border="1px solid"
          transition="all 0.2s"
          fontSize="0.9rem"
          textTransform="uppercase"
          bg={isCopied ? 'fill.300' : 'transparent'}
          opacity={isCopied ? '1' : '0.5'}
          _hover={{ background: 'fill.300', color: 'white', opacity: '1', borderColor: 'fill.300' }}
          color="white"
        >
          {isCopied ? <BsCheckAll size="1.4rem" /> : <MdContentCopy size="1.4rem" />}
          {isCopied ? 'Copied!' : 'Copy'}
        </ActionBtn>
      </Box>
    </Fade>
  );
}
