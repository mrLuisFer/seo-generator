import { useContext } from 'react';
import { LabelHelpersCtx } from 'context/LabelHelpers';

export const useLabelHelpers = () => {
  const ctx = useContext(LabelHelpersCtx);
  if (!ctx) throw new Error('useLabelHelpers must be used within a InputHelpersCtxProvider');

  return ctx;
};
