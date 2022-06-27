import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './highlighterScrollbar.module.css';
import { useColorschemeCtx } from 'context/HighlightColorschemeCtx';
import { useGetInputStates } from 'hooks/useGetInputStates';

export default function Hightlight() {
  const { colorscheme } = useColorschemeCtx();
  const { descriptionTextarea, titleInput, author, ogUrl, imgUrl } = useGetInputStates();

  const initialCodeString: string = `<!-- Primary Meta Tags -->
<title>${titleInput.trim()}</title>
<meta name="title" content="${titleInput.trim()}" />
<meta name="description" content="${descriptionTextarea.trim()}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${ogUrl.trim()}" />
<meta property="og:title" content="${titleInput.trim()}" />
<meta property="og:description" content="${descriptionTextarea.trim()}" />
<meta property="og:image" content="${imgUrl}" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${ogUrl.trim()}" />
<meta property="twitter:title" content="${titleInput.trim()}" />
<meta property="twitter:description" content="${descriptionTextarea.trim()}" />
<meta property="twitter:image" content="${imgUrl}" />
<meta name="author" content="${author.trim()}" />`;

  return (
    <SyntaxHighlighter
      className={styles.highlighter}
      language="html"
      style={colorscheme.value}
      wrapLongLines
      customStyle={{
        width: '100%',
        fontSize: '0.9rem',
        margin: 0,
        borderRadius: '9px 9px 0 0',
      }}
    >
      {initialCodeString}
    </SyntaxHighlighter>
  );
}
