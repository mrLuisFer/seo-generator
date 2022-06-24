import { createContext, useState } from 'react';
import type { InputStatesCtxValue } from './InputStates';

const initialCtxValue: InputStatesCtxValue = {};
export const InputStatesCtx = createContext(initialCtxValue);

export default function InputStatesCtxProvider({ children }: { children: any }) {
  const [descriptionTextarea, setDescriptionTextarea] = useState('');
  const [ogTypeInput, setOgTypeInput] = useState<string>('');
  const [titleInput, setTitleInput] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [ogUrl, setOgUrl] = useState<string>('');

  const valueObj: InputStatesCtxValue = {
    descriptionTextarea,
    setDescriptionTextarea,
    ogTypeInput,
    setOgTypeInput,
    titleInput,
    setTitleInput,
    author,
    setAuthor,
    ogUrl,
    setOgUrl,
  };

  return <InputStatesCtx.Provider value={valueObj}>{children}</InputStatesCtx.Provider>;
}
