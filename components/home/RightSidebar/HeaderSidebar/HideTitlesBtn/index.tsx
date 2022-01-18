import { MdTitle } from 'react-icons/md'
import HeaderBtn from '../HeaderBtn'
import HoverPopup from 'components/common/HoverPopup'

export default function HideTitlesBtn() {
  return (
    <HeaderBtn>
      <HoverPopup text="Hide Tag  titles" width="100px">
        <MdTitle size="1.5rem" />
      </HoverPopup>
    </HeaderBtn>
  )
}
