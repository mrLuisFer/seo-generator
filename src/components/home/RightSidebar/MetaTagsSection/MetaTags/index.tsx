import { forwardRef } from 'react'
import MetaTag from './MetaTag'
import { useGetInputStates } from 'hooks/useGetInputStates'
import DefaultMetatags from './DefaultMetatags'

// eslint-disable-next-line react/display-name
const MetaTags = forwardRef<HTMLElement, any>((_, ref) => {
  const {
    descriptionTextarea,
    ogTypeInput,
    titleInput,
    author,
    ogUrl,
    rating,
    robots,
    ogImg,
    ogImgWidth,
    ogImgHeight,
    themeColor,
  } = useGetInputStates()

  return (
    <code ref={ref}>
      <MetaTag
        tagTitle="Title"
        htmlTemplate={`<title>${titleInput.trim()}</title>\n<meta property="twitter:title" content="${titleInput.trim()}" />\n<meta property="og:title" content="${titleInput.trim()}" />`}
      />
      <MetaTag
        tagTitle="Description"
        htmlTemplate={`<meta name="description" content="${descriptionTextarea.trim()}" />\n<meta name="twitter:description" content="${descriptionTextarea.trim()}" />\n<meta property="og:description" content="${descriptionTextarea.trim()}" />`}
      />
      <MetaTag tagTitle="Og:Type" htmlTemplate={`<meta property=”og:type” content="${ogTypeInput.trim()}" />`} />
      <MetaTag tagTitle="Author" htmlTemplate={`<meta name="author" content="${author.trim()}">`} />
      <MetaTag tagTitle="OgUrl" htmlTemplate={`<meta property="og:url" content="${ogUrl.trim()}"/>`} />
      <MetaTag tagTitle="Rating" htmlTemplate={`<meta name="rating" content="${rating.trim()}">`} />
      <MetaTag tagTitle="Robots" htmlTemplate={`<meta name="robots" content="${robots.trim()}" />`} />
      <MetaTag
        tagTitle="OgImg"
        htmlTemplate={`<meta property="og:image" content="${ogImg}" key="og-image" />\n<meta name="twitter:image" content="${ogImg}" key="twitter-image" />`}
      />
      <MetaTag
        htmlTemplate={`<meta property="og:image:width" content="${ogImgWidth}" />\n<meta name="twitter:image:width" content="${ogImgWidth}" />`}
      />
      <MetaTag
        htmlTemplate={`<meta property="og:image:height" content="${ogImgHeight}" />\n<meta name="twitter:image:height" content="${ogImgHeight}" />`}
      />
      <MetaTag tagTitle="Themecolor" htmlTemplate={`<meta name="theme-color" content="${themeColor}" />`} />
      <DefaultMetatags />
    </code>
  )
})

export default MetaTags
