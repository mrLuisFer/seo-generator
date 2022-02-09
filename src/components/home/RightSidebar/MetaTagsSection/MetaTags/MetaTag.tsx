import Highlight from '../Highlight'
import SidebarTagTitle from '../SidebarTagTitle'

interface MetaTagProps {
  tagTitle?: string
  htmlTemplate: string
  noTitle?: boolean
}

export default function MetaTag({ tagTitle = '', noTitle = false, htmlTemplate }: MetaTagProps) {
  return (
    <>
      {!noTitle && <SidebarTagTitle>{tagTitle}</SidebarTagTitle>}
      <Highlight>{htmlTemplate}</Highlight>
    </>
  )
}
