import { forwardRef } from 'react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import Highlight from '../Highlight';

const MetaTags = forwardRef<HTMLElement, any>((_, ref) => {
  const { descriptionTextarea, ogTypeInput, titleInput, author } = useGetInputStates();

  const initialCodeString: string = `<title>${titleInput.trim()}</title>
<meta property="twitter:title" content="${titleInput.trim()}" />
<meta property="og:title" content="${titleInput.trim()}" />

<meta name="description" content="${descriptionTextarea.trim()}" />
<meta name="twitter:description" content="${descriptionTextarea.trim()}" />
<meta property="og:description" content="${descriptionTextarea.trim()}" />

<meta property=”og:type” content="${ogTypeInput.trim()}" />

<meta name="author" content="${author.trim()}">

<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="twitter:card" content="summary_large_image" />`;

  return (
    <code ref={ref}>
      <Highlight>{initialCodeString}</Highlight>
    </code>
  );
});

export default MetaTags;
