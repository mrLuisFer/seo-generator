import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface IHighlightProps {
  children: any
}

export default function Hightlight({ children }: IHighlightProps) {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={nord}
      customStyle={{
        background: 'transparent',
        width: '100%',
        fontSize: '0.9rem',
        margin: 0,
        padding: '0.5em',
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}
