import MetaTag from './MetaTag'

export default function DefaultMetatags() {
	return (
		<MetaTag htmlTemplate={`<meta name="viewport" content="width=device-width, initial-scale=1" />\n<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />\n<meta name="twitter:card" content="summary_large_image" />`} />
	)
}
