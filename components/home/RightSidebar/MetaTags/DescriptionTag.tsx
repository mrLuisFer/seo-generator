import { Heading } from '@chakra-ui/react'
import Highlight from '../Highlight'

interface DescriptionTagProps {
  tagValue: string
}

export default function DescriptionTag({ tagValue }: DescriptionTagProps) {
  const descriptionTag: string = `<meta name="description" content="${tagValue}" />`
  const ogDescriptionTag: string = `<meta property="og:description" content="${tagValue}" />`
  const twitterDescriptionTag: string = `<meta name="twitter:description" content="${tagValue}" />`

  return (
    <>
      <Heading as="h3" size="sm" mb="0.2rem" mt="1rem">
        Description:
      </Heading>
      <Highlight>{descriptionTag}</Highlight>
      <Highlight>{ogDescriptionTag}</Highlight>
      <Highlight>{twitterDescriptionTag}</Highlight>
    </>
  )
}
