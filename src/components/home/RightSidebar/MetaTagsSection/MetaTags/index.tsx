import { forwardRef } from 'react'
import MetaTag from './MetaTag'
import { useGetInputStates } from 'hooks/useGetInputStates'

// eslint-disable-next-line react/display-name
const MetaTags = forwardRef<HTMLElement, any>((_, ref) => {
  const { descriptionTextarea, ogTypeInput, titleInput, author, ogUrl, rating, robots } = useGetInputStates()

  return (
    <code ref={ref}>
      <MetaTag tagTitle="Title" htmlTemplate={`<title>${titleInput.trim()}</title>`} />
      <MetaTag
        tagTitle="Description"
        htmlTemplate={`<meta name="description" content="${descriptionTextarea.trim()}" />`}
      />
      <MetaTag tagTitle="Og:Type" htmlTemplate={`<meta property=”og:type” content="${ogTypeInput.trim()}" />`} />
      <MetaTag tagTitle="Author" htmlTemplate={`<meta name="author" content="${author.trim()}">`} />
      <MetaTag tagTitle="OgUrl" htmlTemplate={`<meta property="og:url" content="${ogUrl.trim()}"/>`} />
      <MetaTag tagTitle="Rating" htmlTemplate={`<meta name="rating" content="${rating.trim()}">`} />
      <MetaTag tagTitle="Robots" htmlTemplate={`<meta name="robots" content="${robots.trim()}" />`} />
    </code>
  )
})

export default MetaTags
