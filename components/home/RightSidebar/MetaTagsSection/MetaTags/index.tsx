import * as React from 'react'
import KeywordsTag from './KeywordsTag'
import MetaTag from './MetaTag'
import { useGetInputStates } from 'hooks/useGetInputStates'

// eslint-disable-next-line react/display-name
const MetaTags = React.forwardRef<HTMLElement, any>((_, ref) => {
  const { descriptionTextarea, keywordsInput, ogTypeInput, titleInput, author, copyright, ogUrl, rating, robots } =
    useGetInputStates()

  return (
    <code ref={ref}>
      <MetaTag tagTitle="Title" htmlTemplate={`<title>${titleInput}</title>`} />
      <MetaTag tagTitle="Description" htmlTemplate={`<meta name="description" content="${descriptionTextarea}" />`} />
      <KeywordsTag tagValue={keywordsInput} />
      <MetaTag tagTitle="Og:Type" htmlTemplate={`<meta property=”og:type” content="${ogTypeInput}" />`} />
      <MetaTag tagTitle="Author" htmlTemplate={`<meta name="author" content="${author}">`} />
      <MetaTag tagTitle="Copyright" htmlTemplate={`<meta name="dcterms.rightsHolder" content="${copyright}">`} />
      <MetaTag tagTitle="OgUrl" htmlTemplate={`<meta property="og:url" content="${ogUrl}"/>`} />
      <MetaTag tagTitle="Rating" htmlTemplate={`<meta name="rating" content="${rating}">`} />
      <MetaTag tagTitle="Robots" htmlTemplate={`<meta name="robots" content="${robots}" />`} />
    </code>
  )
})

export default MetaTags