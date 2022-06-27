import { createContext, useState } from 'react';

const initialCtxValue: any = {};
export const LabelHelpersCtx = createContext(initialCtxValue);

export default function LabelHelpersCtxProvider({ children }: { children: any }) {
  const [capitalizedText, setCapitalizedText] = useState<boolean>(false);
  const valueObj = { capitalizedText, setCapitalizedText };

  return <LabelHelpersCtx.Provider value={valueObj}>{children}</LabelHelpersCtx.Provider>;
}
