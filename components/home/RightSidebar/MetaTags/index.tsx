import KeywordsTag from './KeywordsTag'
import MetaTag from './MetaTag'

interface MetaTagsProps {
  [stateValue: string]: string
}

export default function MetaTags({
  descriptionTextarea,
  keywordsInput,
  ogTypeInput,
  titleInput,
  author,
  copyright,
  ogUrl,
  rating,
  robots,
}: MetaTagsProps) {
  return (
    <>
      <MetaTag tagTitle="Title" htmlTemplate={`<title>${titleInput}</title>`} />
      <MetaTag tagTitle="Description" htmlTemplate={`<meta name="description" content="${descriptionTextarea}" />`} />
      <KeywordsTag tagValue={keywordsInput} />
      <MetaTag tagTitle="Og:Type" htmlTemplate={`<meta property=”og:type” content="${ogTypeInput}" />`} />
      <MetaTag tagTitle="Author" htmlTemplate={`<meta name="author" content="${author}">`} />
      <MetaTag tagTitle="Copyright" htmlTemplate={`<meta name="dcterms.rightsHolder" content="${copyright}">`} />
      <MetaTag tagTitle="OgUrl" htmlTemplate={`<meta property="og:url" content="${ogUrl}"/>`} />
      <MetaTag tagTitle="Rating" htmlTemplate={`<meta name="rating" content="${rating}">`} />
      <MetaTag tagTitle="Robots" htmlTemplate={`<meta name="robots" content="${robots}" />`} />
    </>
  )
}
