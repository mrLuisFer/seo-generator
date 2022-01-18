import Highlight from '../Highlight'
import SidebarTagTitle from '../SidebarTagTitle'

interface MetaTagProps {
  tagTitle: string
  htmlTemplate: string
}

export default function MetaTag({ tagTitle, htmlTemplate }: MetaTagProps) {
  return (
    <>
      <SidebarTagTitle>{tagTitle}</SidebarTagTitle>
      <Highlight>{htmlTemplate}</Highlight>
    </>
  )
}
