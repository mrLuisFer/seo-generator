import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import styles from './highlighterScrollbar.module.css'

interface IHighlightProps {
  children: any
}

export default function Hightlight({ children }: IHighlightProps) {
  const { setShowTitles } = useSidebarTitlesCtx()
  const paddingValue: string = setShowTitles ? '0.5em' : '0'

  return (
    <SyntaxHighlighter
      className={styles.highlighter}
      language="jsx"
      style={nord}
      customStyle={{
        background: 'transparent',
        width: '100%',
        fontSize: '0.9rem',
        margin: 0,
        padding: paddingValue,
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}
