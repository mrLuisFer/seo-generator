import { Heading } from '@chakra-ui/react'
import Highlight from '../Highlight'

interface TitleTagProps {
  tagValue: string
}
export default function TitleTag({ tagValue }: TitleTagProps) {
  const titleTag: string = `<title>${tagValue}</title>`
  const ogTitleTag: string = `<meta property="og:title" content="${tagValue}" />`
  const twitterTitleTag: string = `<meta name="twitter:title" content="${tagValue}" />`

  return (
    <>
      <Heading as="h3" size="sm" mb="0.2rem">
        Title:
      </Heading>
      <Highlight>{titleTag}</Highlight>
      <Highlight>{ogTitleTag}</Highlight>
      <Highlight>{twitterTitleTag}</Highlight>
    </>
  )
}
