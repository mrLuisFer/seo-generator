import { MdDeleteOutline } from 'react-icons/md'
import HeaderBtn from '../HeaderBtn'
import { useGetInputStates } from 'hooks/useGetInputStates'
import HoverPopup from 'lib/HoverPopup'

export default function CleanInputsBtn() {
  const { setTitleInput, setDescriptionTextarea } = useGetInputStates()

  const handleClearInputs = () => {
    setTitleInput('')
    setDescriptionTextarea('')
  }

  return (
    <HeaderBtn onClick={handleClearInputs}>
      <HoverPopup text="Clear inputs" width="90px">
        <MdDeleteOutline size="1.5rem" />
      </HoverPopup>
    </HeaderBtn>
  )
}

