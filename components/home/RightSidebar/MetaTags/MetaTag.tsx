import Highlight from '../Highlight'
import CommonTittle from '../SidebarTagTittle'

interface MetaTagProps {
  tagTitle: string
  htmlTemplate: string
}

export default function MetaTag({ tagTitle, htmlTemplate }: MetaTagProps) {
  return (
    <>
      <CommonTittle>{tagTitle}</CommonTittle>
      <Highlight>{htmlTemplate}</Highlight>
    </>
  )
}
