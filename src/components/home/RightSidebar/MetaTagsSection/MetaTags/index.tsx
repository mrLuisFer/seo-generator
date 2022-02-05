import { forwardRef } from 'react'
import MetaTag from './MetaTag'
import { useGetInputStates } from 'hooks/useGetInputStates'

// eslint-disable-next-line react/display-name
const MetaTags = forwardRef<HTMLElement, any>((_, ref) => {
  const { descriptionTextarea, ogTypeInput, titleInput, author, ogUrl, rating, robots } = useGetInputStates()

  return (
    <code ref={ref}>
      <MetaTag tagTitle="Title" htmlTemplate={`<title>${titleInput}</title>`} value={titleInput} />
      <MetaTag tagTitle="Description" htmlTemplate={`<meta name="description" content="${descriptionTextarea}" />`} value={descriptionTextarea} />
      <MetaTag tagTitle="Og:Type" htmlTemplate={`<meta property=”og:type” content="${ogTypeInput}" />`} value={ogTypeInput} />
      <MetaTag tagTitle="Author" htmlTemplate={`<meta name="author" content="${author}">`} value={author} />
      <MetaTag tagTitle="OgUrl" htmlTemplate={`<meta property="og:url" content="${ogUrl}"/>`} value={ogUrl} />
      <MetaTag tagTitle="Rating" htmlTemplate={`<meta name="rating" content="${rating}">`} value={rating} />
      <MetaTag tagTitle="Robots" htmlTemplate={`<meta name="robots" content="${robots}" />`} value={robots} />
    </code>
  )
})

export default MetaTags
