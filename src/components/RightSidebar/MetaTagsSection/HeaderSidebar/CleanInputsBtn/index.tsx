import { Fade } from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import HeaderBtn from '../HeaderBtn';
import { useGetInputStates } from 'hooks/useGetInputStates';
import HoverPopup from 'lib/HoverPopup';
import { useCommonHoverBgColor } from 'hooks/useCommonHoverBgColor';

export default function CleanInputsBtn() {
  const {
    descriptionTextarea,
    setDescriptionTextarea,
    ogTypeInput,
    setOgTypeInput,
    titleInput,
    setTitleInput,
    author,
    setAuthor,
  } = useGetInputStates();

  const handleClearInputs = () => {
    setTitleInput('');
    setDescriptionTextarea('');
    setOgTypeInput('');
    setAuthor('');
  };

  const hasInputText: boolean =
    titleInput.length > 5 ||
    descriptionTextarea.length > 5 ||
    ogTypeInput.length > 5 ||
    titleInput.length > 5 ||
    author.length > 5;

  const hoverBgColor: string = useCommonHoverBgColor();

  return (
    <Fade in={hasInputText}>
      <HeaderBtn onClick={handleClearInputs}>
        <HoverPopup text="Clear inputs" width="90px" bgColor={hoverBgColor}>
          <MdDeleteOutline size="1.5rem" />
        </HoverPopup>
      </HeaderBtn>
    </Fade>
  );
}
