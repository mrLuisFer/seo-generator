import Highlight from '../Highlight'
import SidebarTagTitle from '../SidebarTagTitle'

interface MetaTagProps {
  tagTitle: string
  htmlTemplate: string
  value: string
}

export default function MetaTag({ tagTitle, htmlTemplate, value }: MetaTagProps) {
  const validateValueLength: boolean = value.length < 5
  return (
    <>
      {!validateValueLength && (
        <>
          <SidebarTagTitle>{tagTitle}</SidebarTagTitle>
          <Highlight>{htmlTemplate}</Highlight>
        </>
      )}
    </>
  )
}
