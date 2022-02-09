import Head from 'next/head'
interface SEOProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
}

export default function SEO({
  title,
  description = '',
  image = '/image-preview.jpg',
  imageAlt = 'Seo Generator - the easiest way to make your Metatags',
}: SEOProps) {
  return (
    <Head>
      <title>{title ? `${title} | Seo Generator` : 'Seo Generator'}</title>
      <meta property="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta property="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Head>
  )
}
