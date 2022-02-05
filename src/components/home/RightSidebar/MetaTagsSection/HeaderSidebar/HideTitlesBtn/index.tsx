import { useState } from 'react'
import HoverPopup from 'lib/HoverPopup'
import HeaderBtn from '../HeaderBtn'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import HideTitlesIcon from './HideTitlesIcon'
import {useCommonHoverBgColor} from '../useCommonHoverBgColor'

export default function HideTitlesBtn() {
  const { setShowTitles } = useSidebarTitlesCtx()
  const [showMiddleline, setShowMiddleline] = useState<boolean>(true)
  const hoverBgColor = useCommonHoverBgColor()

  const handleShowTitles = () => {
    setShowTitles((prevState: boolean) => !prevState)
    setShowMiddleline((prevState: boolean) => !prevState)
  }

  return (
    <HoverPopup text="Hide Tag titles" width="100px" bgColor={hoverBgColor}>
      <HeaderBtn onClick={handleShowTitles}>
        <HideTitlesIcon showMiddleline={showMiddleline} />
      </HeaderBtn>
    </HoverPopup>
  )
}
