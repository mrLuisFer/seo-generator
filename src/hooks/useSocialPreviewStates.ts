import { useContext } from 'react';
import { SocialPreviewCtx } from 'context/SocialPreview';

export const useSocialPreviewStates = () => {
  const ctx = useContext(SocialPreviewCtx);
  if (!ctx) {
    throw new Error('useSocialPreviewStates must be used within a SocialPreviewCtxProvider');
  }

  return ctx;
};
