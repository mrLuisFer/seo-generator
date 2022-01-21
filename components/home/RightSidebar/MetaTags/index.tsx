import KeywordsTag from './KeywordsTag'
import MetaTag from './MetaTag'

interface MetaTagsProps {
  [stateValue: string]: string
}

export default function MetaTags({
  descriptionTextarea,
  imgInput,
  keywordsInput,
  ogTypeInput,
  titleInput,
  author,
  copyright,
  ogUrl,
  rating,
  robots,
}: MetaTagsProps) {
  console.log(imgInput, author, copyright, ogUrl, rating, robots)

  return (
    <>
      <MetaTag tagTitle="Title" htmlTemplate={`<title>${titleInput}</title>`} />
      <MetaTag tagTitle="Description" htmlTemplate={`<meta name="description" content="${descriptionTextarea}" />`} />
      <KeywordsTag tagValue={keywordsInput} />
      <MetaTag tagTitle="Og:Type" htmlTemplate={`<meta property=”og:type” content="${ogTypeInput}" />`} />
      <MetaTag tagTitle="Og:Url" htmlTemplate={`<meta property=”og:type” content="${ogUrl}" />`} />
    </>
  )
}
