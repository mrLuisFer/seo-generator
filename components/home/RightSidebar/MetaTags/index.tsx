import type { IRequiredInputs, IOptionalInputs } from '../../homeTypes'
import KeywordsTag from './KeywordsTag'
import MetaTag from './MetaTag'

interface MetaTagsProps {
  requiredInputValues: IRequiredInputs
  optionalInputValues: IOptionalInputs
}

export default function MetaTags({ requiredInputValues, optionalInputValues }: MetaTagsProps) {
  const required: IRequiredInputs = requiredInputValues
  const optional: IOptionalInputs = optionalInputValues
  return (
    <>
      <MetaTag tagTitle="Title" htmlTemplate={`<title>${required.titleInput}</title>`} />
      <MetaTag
        tagTitle="Description"
        htmlTemplate={`<meta name="description" content="${required.descriptionTextarea}" />`}
      />
      <KeywordsTag tagValue={requiredInputValues.keywordsInput} />
      <MetaTag
        tagTitle="Og:Type"
        htmlTemplate={`<meta property=”og:type” content="${required.ogTypeInput}" />`}
      />
      <MetaTag
        tagTitle="Og:Url"
        htmlTemplate={`<meta property=”og:type” content="${optional.ogUrl}" />`}
      />
    </>
  )
}
