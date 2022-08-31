import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './highlighterScrollbar.module.css';
import { useColorschemeCtx } from 'context/HighlightColorschemeCtx';
import { useGetInputStates } from 'hooks/useGetInputStates';

export default function Hightlight() {
  const { colorscheme } = useColorschemeCtx();
  const { descriptionTextarea, titleInput, author, ogUrl, imgUrl } = useGetInputStates();

  const hasTitle: boolean = titleInput.length > 1;
  const hasDescription: boolean = descriptionTextarea.length > 1;
  const hasAuthor: boolean = author.length > 1;
  const hasOgUrl: boolean = ogUrl.length > 1;

  const initialCodeString: string = `<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
${hasTitle ? `<title>${titleInput.trim()}</title>` : ''}
${hasTitle ? `<meta name="title" content="${titleInput.trim()}" />` : ''}
${hasDescription ? `<meta name="description" content="${descriptionTextarea.trim()}" />` : ''}
<meta property="og:type" content="website" />
${hasOgUrl ? `<meta property="og:url" content="https://${ogUrl.trim()}" />` : ''}
${hasTitle ? `<meta property="og:title" content="${titleInput.trim()}" />` : ''}
${hasDescription ? `<meta property="og:description" content="${descriptionTextarea.trim()}" />` : ''}
${imgUrl ? `<meta property="og:image" content="${imgUrl}" />` : ''}
<meta property="twitter:card" content="summary_large_image" />
${hasOgUrl ? `<meta property="twitter:url" content="https://${ogUrl.trim()}" />` : ''}
${hasTitle ? `<meta property="twitter:title" content="${titleInput.trim()}" />` : ''}
${hasDescription ? `<meta property="twitter:description" content="${descriptionTextarea.trim()}" />` : ''}
${imgUrl ? `<meta property="twitter:image" content="${imgUrl}" />` : ''}
${hasAuthor ? `<meta name="author" content="${author.trim()}" />` : ''}`;

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
