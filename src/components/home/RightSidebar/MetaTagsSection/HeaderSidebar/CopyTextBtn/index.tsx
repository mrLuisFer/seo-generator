import { MdContentCopy } from 'react-icons/md'
import { Fade } from '@chakra-ui/react'
import HeaderBtn from '../HeaderBtn'
import HoverPopup from 'lib/HoverPopup'
import { useCommonHoverBgColor } from 'hooks/useCommonHoverBgColor'

interface ICopyTextBtnProps {
  clickFunc: () => void
}

export default function CopyTextBtn({ clickFunc }: ICopyTextBtnProps) {
  const hoverBgColor: string = useCommonHoverBgColor()

  return (
    <Fade in={true}>
      <HeaderBtn onClick={clickFunc}>
        <HoverPopup text="Copy text" width="75px" bgColor={hoverBgColor}>
          <MdContentCopy size="1.5rem" />
        </HoverPopup>
      </HeaderBtn>
    </Fade>
  )
}
