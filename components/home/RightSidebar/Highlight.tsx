import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Hightlight() {
  const codeString = `
  return (
    <SyntaxHighlighter language="jsx" style={nord}>
      {/* it works :D */}
      {codeString}
    </SyntaxHighlighter>
  )
  `

  return (
    <SyntaxHighlighter language="jsx" style={nord}>
      {/* it works :D */}
      {codeString}
    </SyntaxHighlighter>
  )
}
