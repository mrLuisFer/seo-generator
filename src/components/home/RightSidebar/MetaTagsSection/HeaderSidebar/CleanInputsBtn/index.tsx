import { Box, Fade } from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'
import HeaderBtn from '../HeaderBtn'
import { useGetInputStates } from 'hooks/useGetInputStates'
import HoverPopup from 'lib/HoverPopup'

export default function CleanInputsBtn() {
  const {
    descriptionTextarea,
    ogTypeInput,
    titleInput,
    author,
    ogUrl,
    rating,
    robots,
    setAuthor,
    setOgTypeInput,
    setDescriptionTextarea,
    setTitleInput,
    setOgUrl,
    setRating,
    setRobots,
  } = useGetInputStates()

  const handleClearInputs = () => {
    setTitleInput('')
    setDescriptionTextarea('')
    setRobots('')
    setOgUrl('')
    setRating('')
    setOgTypeInput('')
  }

  const hasInputText: boolean =
    titleInput.length > 5 ||
    descriptionTextarea.length > 5 ||
    ogTypeInput.length > 5 ||
    titleInput.length > 5 ||
    author.length > 5 ||
    ogUrl.length > 5 ||
    rating.length > 5 ||
    robots.length > 5 ||
    setAuthor.length > 5

  return (
    <Fade in={hasInputText}>
      <HeaderBtn onClick={handleClearInputs}>
        <HoverPopup text="Clear inputs" width="90px">
          <MdDeleteOutline size="1.5rem" />
        </HoverPopup>
      </HeaderBtn>
    </Fade>
  )
}
