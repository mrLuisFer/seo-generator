import { createContext, useState, Dispatch, SetStateAction } from 'react';

export interface SocialPreviewCtxProps {
  twitterPreview?: boolean;
  linkedinPreview?: boolean;
  pinterestPreview?: boolean;
  discordPreview?: boolean;
  facebookPreview?: boolean;
  googlePreview?: boolean;
  slackPreview?: boolean;
  setTwitterPreview?: Dispatch<SetStateAction<boolean>>;
  setLinkedinPreview?: Dispatch<SetStateAction<boolean>>;
  setPinterestPreview?: Dispatch<SetStateAction<boolean>>;
  setDiscordPreview?: Dispatch<SetStateAction<boolean>>;
  setFacebookPreview?: Dispatch<SetStateAction<boolean>>;
  setGooglePreview?: Dispatch<SetStateAction<boolean>>;
  setSlackPreview?: Dispatch<SetStateAction<boolean>>;
}

const initialCtxValue: SocialPreviewCtxProps = {};
export const SocialPreviewCtx = createContext(initialCtxValue);

export default function SocialPreviewProvider({ children }: { children: any }) {
  const [twitterPreview, setTwitterPreview] = useState<boolean>(true);
  const [linkedinPreview, setLinkedinPreview] = useState<boolean>(false);
  const [pinterestPreview, setPinterestPreview] = useState<boolean>(false);
  const [discordPreview, setDiscordPreview] = useState<boolean>(false);
  const [facebookPreview, setFacebookPreview] = useState<boolean>(true);
  const [googlePreview, setGooglePreview] = useState<boolean>(true);
  const [slackPreview, setSlackPreview] = useState<boolean>(false);

  const valueObj = {
    twitterPreview,
    linkedinPreview,
    pinterestPreview,
    discordPreview,
    facebookPreview,
    googlePreview,
    slackPreview,
    setTwitterPreview,
    setLinkedinPreview,
    setPinterestPreview,
    setDiscordPreview,
    setFacebookPreview,
    setGooglePreview,
    setSlackPreview,
  };

  return <SocialPreviewCtx.Provider value={valueObj}>{children}</SocialPreviewCtx.Provider>;
}
