import { forwardRef } from 'react'
import { useGetInputStates } from 'hooks/useGetInputStates'
import Highlight from '../Highlight'

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

  const initialCodeString: string = `<title>${titleInput.trim()}</title>
<meta property="twitter:title" content="${titleInput.trim()}" />
<meta property="og:title" content="${titleInput.trim()}" />

<meta name="description" content="${descriptionTextarea.trim()}" />
<meta name="twitter:description" content="${descriptionTextarea.trim()}" />
<meta property="og:description" content="${descriptionTextarea.trim()}" />

<meta property=”og:type” content="${ogTypeInput.trim()}" />

<meta name="author" content="${author.trim()}">

<meta property="og:url" content="${ogUrl.trim()}" />

<meta name="rating" content="${rating.trim()}" />

<meta name="robots" content="${robots.trim()}" />

<meta property="og:image" content="${ogImg}" key="og-image" />\n<meta name="twitter:image" content="${ogImg}" key="twitter-image" />

<meta property="og:image:width" content="${ogImgWidth}" />\n<meta name="twitter:image:width" content="${ogImgWidth}" />
<meta property="og:image:height" content="${ogImgHeight}" />\n<meta name="twitter:image:height" content="${ogImgHeight}" />

<meta name="theme-color" content="${themeColor}" />

<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="twitter:card" content="summary_large_image" />`

  return (
    <code ref={ref}>
      <Highlight>{initialCodeString}</Highlight>
    </code>
  )
})

export default MetaTags
