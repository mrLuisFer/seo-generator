import { createRef, RefObject } from 'react';

export default function MetatagsModal() {
  const copyBtnRef: RefObject<HTMLElement> = createRef<HTMLElement>();

  const handleCopyText = () => {
    const nodeValue: string = copyBtnRef.current.innerText;
    navigator.clipboard.writeText(nodeValue);
  };

  return <></>;
}
