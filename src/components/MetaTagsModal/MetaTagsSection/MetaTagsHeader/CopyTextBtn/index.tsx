import { MdContentCopy } from 'react-icons/md';
import { Fade } from '@chakra-ui/react';
import ActionBtn from '../ActionBtn';

interface ICopyTextBtnProps {
  clickFunc: () => void;
}

export default function CopyTextBtn({ clickFunc }: ICopyTextBtnProps) {
  return (
    <Fade in={true}>
      <ActionBtn
        onClick={clickFunc}
        display="flex"
        alignItems="center"
        gridGap="0.2rem"
        fontWeight="semibold"
        p="0.5rem"
        borderRadius="9px"
        borderColor="border.100"
        border="1px solid"
        transition="all 0.2s"
        _hover={{ background: 'fill.300', color: 'white', opacity: '1', borderColor: "fill.300" }}
      >
        <MdContentCopy size="1.5rem" />
        Copy!
      </ActionBtn>
    </Fade>
  );
}
