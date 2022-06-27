import { Fade } from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import ActionBtn from '../ActionBtn';
import HoverPopup from 'lib/HoverPopup';
import { useCommonHoverBgColor } from 'hooks/useCommonHoverBgColor';
import { useHasTextOnInputs } from 'hooks/useHasTextOnInputs';
import { useGetInputStates } from 'hooks/useGetInputStates';

export default function CleanInputsBtn() {
  const { setDescriptionTextarea, setTitleInput, setAuthor } = useGetInputStates();

  const hasInputText = useHasTextOnInputs();

  const handleClearInputs = () => {
    setTitleInput('');
    setDescriptionTextarea('');
    setAuthor('');
  };

  const hoverBgColor: string = useCommonHoverBgColor();

  return (
    <Fade in={hasInputText}>
      <ActionBtn onClick={handleClearInputs}>
        <HoverPopup text="Clear inputs" width="90px" bgColor={hoverBgColor}>
          <MdDeleteOutline size="1.5rem" />
        </HoverPopup>
      </ActionBtn>
    </Fade>
  );
}
