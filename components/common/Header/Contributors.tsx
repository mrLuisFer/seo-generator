import ClickPopup from 'lib/ClickPopup'
import HeaderBtn from 'lib/CommonBtn'
import { MdPerson } from 'react-icons/md'

export default function Contributors() {
  return (
    <ClickPopup text="Made by mrLuisFer" width="8rem" height={''}>
      <HeaderBtn>
        <MdPerson size="1.5rem" />
      </HeaderBtn>
    </ClickPopup>
  )
}
