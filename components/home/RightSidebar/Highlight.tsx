import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'

interface IHighlightProps {
  children: any
}

export default function Hightlight({ children }: IHighlightProps) {
  const { setShowTitles } = useSidebarTitlesCtx()
  const paddingValue: string = setShowTitles ? '0.5em' : '0px'

  return (
    <SyntaxHighlighter
      language="jsx"
      style={nord}
      customStyle={{
        background: 'transparent',
        width: '100%',
        fontSize: '0.9rem',
        margin: 0,
        padding: paddingValue,
      }}
      padding={paddingValue}
      margin={0}
    >
      {children}
    </SyntaxHighlighter>
  )
}
