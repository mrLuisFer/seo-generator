import { useState } from 'react'
import HoverPopup from 'components/common/HoverPopup'
import HeaderBtn from '../HeaderBtn'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import HideTitlesIcon from './HideTitlesIcon'

export default function HideTitlesBtn() {
  const { setShowTitles } = useSidebarTitlesCtx()
  const [showMiddleline, setShowMiddleline] = useState<boolean>(true)

  const handleShowTitles = () => {
    setShowTitles((prevState: boolean) => !prevState)
    setShowMiddleline((prevState: boolean) => !prevState)
  }

  return (
    <HoverPopup text="Hide Tag  titles" width="100px">
      <HeaderBtn onClick={handleShowTitles}>
        <HideTitlesIcon showMiddleline={showMiddleline} />
      </HeaderBtn>
    </HoverPopup>
  )
}
