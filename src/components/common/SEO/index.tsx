import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({
  title,
  description = '',
}: SEOProps) {
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      <title>{title}</title>
      <meta name="title" content={`${title}`} />
      <meta name="description" content={`${description}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://seo-generator.vercel.app" />
      <meta property="og:title" content={`${title}"`} />
      <meta property="og:description" content={`${description}"`} />
      <meta property="og:image" content="/seo-img.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://seo-generator.vercel.app" />
      <meta property="twitter:title" content={`${title}"`} />
      <meta property="twitter:description" content={`${description}" `} />
      <meta property="twitter:image" content="/seo-img.png" />
      <meta name="author" content="mrLuisFer" />
    </Head>
  );
}
