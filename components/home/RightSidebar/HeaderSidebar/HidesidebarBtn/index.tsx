import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs'
import HoverPopup from 'lib/HoverPopup'
import HeaderBtn from '../HeaderBtn'
import { useSidebarCtx } from 'hooks/useSidebarCtx'

export default function HidesidebarBtn() {
  const { setHideSidebar } = useSidebarCtx()

  return (
    <HeaderBtn onClick={() => setHideSidebar(true)}>
      <HoverPopup text="Hide sidebar preview" width="100px">
        <BsReverseLayoutSidebarInsetReverse size="1.5rem" />
      </HoverPopup>
    </HeaderBtn>
  )
}
