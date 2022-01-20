import KeywordsTag from './KeywordsTag'
import MetaTag from './MetaTag'

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
}: any) {
  console.log(
    descriptionTextarea,
    imgInput,
    keywordsInput,
    ogTypeInput,
    titleInput,
    author,
    copyright,
    ogUrl,
    rating,
    robots
  )

  return (
    <>
      <MetaTag tagTitle="Title" htmlTemplate={`<title>${titleInput}</title>`} />
      <MetaTag
        tagTitle="Description"
        htmlTemplate={`<meta name="description" content="${descriptionTextarea}" />`}
      />
      <KeywordsTag tagValue={keywordsInput} />
      <MetaTag
        tagTitle="Og:Type"
        htmlTemplate={`<meta property=”og:type” content="${ogTypeInput}" />`}
      />
      <MetaTag tagTitle="Og:Url" htmlTemplate={`<meta property=”og:type” content="${ogUrl}" />`} />
    </>
  )
}
