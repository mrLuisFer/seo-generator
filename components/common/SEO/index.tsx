import Head from 'next/head'

interface SEOProps {
  title: string
  description?: string
  image?: string
  url?: string
  keywords?: string[]
  imageAlt?: string
}

export default function SEO({ title, description, image, url, imageAlt, keywords }: SEOProps) {
  let keywordsStr: string = ''
  if (keywords) keywordsStr = keywords?.join(',')

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="keywords" content={keywordsStr} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
