import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface ShowPreview {
  showPreview?: boolean;
  setShowPreview?: Dispatch<SetStateAction<boolean>>;
}

export const ShowPreviewCtx = createContext<ShowPreview>({});

export default function ShowPreviewCtxProvider({ children }) {
  const [showPreview, setShowPreview] = useState<boolean>(true);

  return <ShowPreviewCtx.Provider value={{ showPreview, setShowPreview }}>{children}</ShowPreviewCtx.Provider>;
}

export const useShowPreviewCtx = () => {
  const ctx: ShowPreview = useContext(ShowPreviewCtx);

  if (!ctx) {
    throw new Error('useShowPreviewCtx must be used within a ShowPreviewCtxProvider');
  }

  return ctx;
};
