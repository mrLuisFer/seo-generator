import { MdContentCopy } from 'react-icons/md'
import { Fade } from '@chakra-ui/react'
import HeaderBtn from '../HeaderBtn'
import HoverPopup from 'lib/HoverPopup'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'

interface ICopyTextBtnProps {
  clickFunc: () => void
}

export default function CopyTextBtn({ clickFunc }: ICopyTextBtnProps) {
  const { showTitles } = useSidebarTitlesCtx()

  return (
    <Fade in={!showTitles}>
      {showTitles ? (
        ''
      ) : (
        <HeaderBtn onClick={clickFunc}>
          <HoverPopup text="Copy text" width="75px">
            <MdContentCopy size="1.5rem" />
          </HoverPopup>
        </HeaderBtn>
      )}
    </Fade>
  )
}
