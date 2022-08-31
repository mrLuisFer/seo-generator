import { MdDeleteOutline } from 'react-icons/md';
import ActionBtn from '../ActionBtn';
import HoverPopup from 'lib/HoverPopup';
import { useCommonHoverBgColor } from 'hooks/useCommonHoverBgColor';
import { useHasTextOnInputs } from 'hooks/useHasTextOnInputs';
import { useGetInputStates } from 'hooks/useGetInputStates';
import {
  Fade,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  Button,
  Box,
  PopoverHeader,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

function CleanInputsBtn({ onOpenPopover, color = 'white' }: { onOpenPopover: any; color: string }) {
  const hasInputText = useHasTextOnInputs();
  const hoverBgColor: string = useCommonHoverBgColor();

  return (
    <Fade in={hasInputText}>
      {hasInputText ? (
        <ActionBtn
          onClick={onOpenPopover}
          borderRadius="5px"
          p="1px"
          _hover={{ opacity: '1', background: 'red.400', color }}
          textColor={color}
        >
          <HoverPopup text="Clear inputs" width="90px" bgColor={hoverBgColor} right="-50px" top="20px">
            <MdDeleteOutline size="1.5rem" />
          </HoverPopup>
        </ActionBtn>
      ) : (
        <></>
      )}
    </Fade>
  );
}

export default function ConfirmModal({ iconColor }: { iconColor: string }) {
  const { onClose, isOpen, onToggle } = useDisclosure();
  const { setDescriptionTextarea, setTitleInput, setAuthor, setOgUrl, setImgUrl } = useGetInputStates();
  const textColor = useColorModeValue('black', 'gray.200');

  const handleClearInputs = () => {
    setTitleInput('');
    setDescriptionTextarea('');
    setAuthor('');
    setOgUrl('');
    setImgUrl('');
    onClose();
  };

  return (
    <Popover onClose={onClose} isOpen={isOpen} isLazy>
      {/* @ts-ignore */}
      <PopoverTrigger>
        <Box>
          <CleanInputsBtn onOpenPopover={onToggle} color={iconColor} />
        </Box>
      </PopoverTrigger>
      <PopoverContent color={textColor}>
        <PopoverHeader>Confirm</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody fontSize="0.8rem">Are you sure you want to remove the content of the inputs?</PopoverBody>
        <PopoverFooter display="flex" gridGap="1rem">
          <Button fontSize="0.9rem" p="0rem 0.6rem" onClick={onClose}>
            Cancel
          </Button>
          <Button
            bg="red.400"
            _hover={{ bg: 'red.500' }}
            color="white"
            fontSize="0.9rem"
            p="0rem 0.6rem"
            onClick={handleClearInputs}
          >
            Confirm
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
