import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs'
import HoverPopup from 'lib/HoverPopup'
import HeaderBtn from '../HeaderBtn'
import { useSidebarCtx } from 'hooks/useSidebarCtx'
import {useCommonHoverBgColor} from '../useCommonHoverBgColor'

export default function HidesidebarBtn() {
  const { setHideSidebar } = useSidebarCtx()
  const hoverBgColor: string = useCommonHoverBgColor()

  return (
    <HeaderBtn onClick={() => setHideSidebar(true)}>
      <HoverPopup text="Hide sidebar preview" width="100px" bgColor={hoverBgColor}>
        <BsReverseLayoutSidebarInsetReverse size="1.5rem" />
      </HoverPopup>
    </HeaderBtn>
  )
}
