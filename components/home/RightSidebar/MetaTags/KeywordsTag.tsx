import CommonTittle from '../SidebarTagTittle'
import Highlight from '../Highlight'

export default function KeywordsTag({ tagValue }: { tagValue: string }) {
  const keywordsArr: string[] = tagValue.split(' ')
  const keywords: string = keywordsArr.join(', ')
  const keywordsTag: string = `<meta name="keywords" content="${keywords}">`

  return (
    <>
      <CommonTittle>Keywords</CommonTittle>
      <Highlight>{keywordsTag}</Highlight>
    </>
  )
}
