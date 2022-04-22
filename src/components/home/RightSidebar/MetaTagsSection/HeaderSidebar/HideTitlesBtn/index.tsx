import { useState } from 'react'
import HoverPopup from 'lib/HoverPopup'
import HeaderBtn from '../HeaderBtn'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import HideTitlesIcon from './HideTitlesIcon'
import { useCommonHoverBgColor } from 'hooks/useCommonHoverBgColor'

export default function HideTitlesBtn() {
  const { setShowTitles, showTitles } = useSidebarTitlesCtx()
  const [showMiddleline, setShowMiddleline] = useState<boolean>(true)
  const hoverBgColor: string = useCommonHoverBgColor()

  const handleShowTitles = () => {
    setShowTitles((prevState: boolean) => !prevState)
    setShowMiddleline((prevState: boolean) => !prevState)
  }

  return (
    <HoverPopup
      text={`${showTitles ? 'Hide' : 'Show'} Tag titles`}
      width={showTitles ? '100px' : '120px'}
      bgColor={hoverBgColor}
    >
      <HeaderBtn onClick={handleShowTitles}>
        <HideTitlesIcon showMiddleline={showMiddleline} />
      </HeaderBtn>
    </HoverPopup>
  )
}
