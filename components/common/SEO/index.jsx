import Head from 'next/head'

export default function SEO({ title, description, image, url, imageAlt }) {
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
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
