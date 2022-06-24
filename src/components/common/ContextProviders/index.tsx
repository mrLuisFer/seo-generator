import { ChakraProvider } from '@chakra-ui/react';
import InputStatesCtxProvider from 'context/InputStates';
import HightlightColorschemeProvider from 'context/HighlightColorschemeCtx';
import LabelHelpers from 'context/LabelHelpers';
import theme from './theme';

export default function ContextProviders({ children }: { children: any }) {
  return (
    <ChakraProvider theme={theme}>
      <LabelHelpers>
        <InputStatesCtxProvider>
          <HightlightColorschemeProvider>{children}</HightlightColorschemeProvider>
        </InputStatesCtxProvider>
      </LabelHelpers>
    </ChakraProvider>
  );
}
