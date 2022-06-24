import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styles from './highlighterScrollbar.module.css'
import { useColorschemeCtx } from 'context/HighlightColorschemeCtx'

interface IHighlightProps {
  children: any
}

export default function Hightlight({ children }: IHighlightProps) {
  const { colorscheme } = useColorschemeCtx()

  return (
    <SyntaxHighlighter
      className={styles.highlighter}
      language="jsx"
      style={colorscheme.value}
      wrapLongLines
      customStyle={{
        width: '100%',
        fontSize: '0.9rem',
        margin: 0,
        borderRadius: '10px',
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}
