import HeaderBtn from '../HeaderBtn'
import HoverPopup from 'components/common/HoverPopup'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import HideTitlesIcon from './HideTitlesIcon'

export default function HideTitlesBtn() {
  const { setShowTitles } = useSidebarTitlesCtx()

  return (
    <HeaderBtn onClick={() => setShowTitles((prevState: boolean) => !prevState)}>
      <HoverPopup text="Hide Tag  titles" width="100px">
        <HideTitlesIcon />
      </HoverPopup>
    </HeaderBtn>
  )
}
