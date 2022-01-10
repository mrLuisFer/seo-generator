import Highlight from '../Highlight'
import CommonTittle from '../CommonTittle'

interface TitleTagProps {
  tagValue: string
}
export default function TitleTag({ tagValue }: TitleTagProps) {
  const titleTag: string = `<title>${tagValue}</title>`

  return (
    <>
      <CommonTittle>Title:</CommonTittle>
      <Highlight>{titleTag}</Highlight>
    </>
  )
}
