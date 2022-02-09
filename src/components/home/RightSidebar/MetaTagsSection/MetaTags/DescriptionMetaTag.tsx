import MetaTag from './MetaTag'

export default function DescriptionMetaTag({ description }: { description: string }) {
	const htmlTemplate = `<meta name="description" content="${description}" />\n<meta name="twitter:description" content="${description}" />\n<meta property="og:description" content="${description}" />`

	return <MetaTag tagTitle="Description" htmlTemplate={htmlTemplate} />
}
