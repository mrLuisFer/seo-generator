import Highlight from '../Highlight'
import CommonTIttle from '../CommonTittle'

interface DescriptionTagProps {
  tagValue: string
}

export default function DescriptionTag({ tagValue }: DescriptionTagProps) {
  const descriptionTag: string = `<meta name="description" content="${tagValue}" />`

  return (
    <>
      <CommonTIttle>Description:</CommonTIttle>
      <Highlight>{descriptionTag}</Highlight>
    </>
  )
}
