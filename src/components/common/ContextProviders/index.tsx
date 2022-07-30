import { ChakraProvider } from '@chakra-ui/react';
import InputStatesCtxProvider from 'context/InputStates';
import HightlightColorschemeProvider from 'context/HighlightColorschemeCtx';
import LabelHelpers from 'context/LabelHelpers';
import SocialPreviewCtxProvider from 'context/SocialPreview';
import ShowPreviewCtxProvider from 'context/ShowPreview';
import theme from './theme';

export default function ContextProviders({ children }: { children: any }) {
  return (
    <ChakraProvider theme={theme}>
      <LabelHelpers>
        <InputStatesCtxProvider>
          <SocialPreviewCtxProvider>
            <ShowPreviewCtxProvider>
              <HightlightColorschemeProvider>{children}</HightlightColorschemeProvider>
            </ShowPreviewCtxProvider>
          </SocialPreviewCtxProvider>
        </InputStatesCtxProvider>
      </LabelHelpers>
    </ChakraProvider>
  );
}
