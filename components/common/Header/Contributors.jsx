import ClickPopup from '../ClickPopup'
import HeaderBtn from '../CommonBtn'
import { MdPerson } from 'react-icons/md'

export default function Contributors() {
	return (
		<ClickPopup text="Made by mrLuisFer" width="8rem">
			<HeaderBtn>
				<MdPerson size="1.5rem" />
			</HeaderBtn>
		</ClickPopup>
	)
}
