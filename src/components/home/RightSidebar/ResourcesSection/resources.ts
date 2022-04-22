export type IResource = {
  url: string
  title: string
  shortDescription?: string
}

const resources: Array<IResource> = [
  {
    url: 'https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags',
    title: 'The Ultimate Guide to SEO Meta Tags',
    shortDescription:
      'Meta tags provide information about the webpage in the HTML of the document. This information is called "metadata" and while it is not displayed on the page itself, it can be read by search engines and web crawlers.',
  },
  {
    url: 'https://developers.google.com/search/docs/advanced/crawling/special-tags',
    title: 'Meta tags that Google understands',
    shortDescription:
      'Google supports both page-level meta-tags and inline directives to help control how your sites pages will appear in Google Search.',
  },
  {
    url: 'https://www.ionos.com/digitalguide/websites/web-development/the-most-important-meta-tags-and-their-functions/',
    title: 'The essential meta tags at a glance',
    shortDescription:
      'Deposited in the head section of an HTML document, meta tags are used to indicate coded information and specify metadata',
  },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
    title: '<meta>: The metadata element',
    shortDescription:
      'The <meta> HTML element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.',
  },
]

export default resources
