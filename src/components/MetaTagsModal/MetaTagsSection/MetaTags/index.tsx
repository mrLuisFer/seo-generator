import Highlight from '../Highlight';
import { Box } from '@chakra-ui/react';
import MetaTagsHeader from '../MetaTagsHeader';
import { createRef, RefObject } from 'react';

const MetaTags = () => {
  const copyBtnRef: RefObject<HTMLElement> = createRef<HTMLElement>();

  const handleCopyText = () => {
    const nodeValue: string = copyBtnRef.current.innerText;
    navigator.clipboard.writeText(nodeValue);
  };

  return (
    <Box>
      <code ref={copyBtnRef}>
        <Highlight />
      </code>
      <MetaTagsHeader copyFunc={handleCopyText} />
    </Box>
  );
};

export default MetaTags;
