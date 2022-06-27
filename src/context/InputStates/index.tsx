import { createContext, useState } from 'react';
import type { InputStatesCtxValue } from './InputStates';

const initialCtxValue: InputStatesCtxValue = {};
export const InputStatesCtx = createContext(initialCtxValue);

export default function InputStatesCtxProvider({ children }: { children: any }) {
  const [descriptionTextarea, setDescriptionTextarea] = useState('');
  const [titleInput, setTitleInput] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [ogUrl, setOgUrl] = useState<string>('');
  const [imgUrl, setImgUrl] = useState(null);

  const valueObj: InputStatesCtxValue = {
    descriptionTextarea,
    setDescriptionTextarea,
    titleInput,
    setTitleInput,
    author,
    setAuthor,
    ogUrl,
    setOgUrl,
    imgUrl,
    setImgUrl,
  };

  return <InputStatesCtx.Provider value={valueObj}>{children}</InputStatesCtx.Provider>;
}
