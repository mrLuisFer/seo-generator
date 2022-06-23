import { ChakraProvider } from '@chakra-ui/react'
import InputStatesCtxProvider from 'context/InputStates'
import HightlightColorschemeProvider from 'context/HighlightColorschemeCtx'
import theme from './theme'

export default function ContextProviders({ children }: { children: any }) {
  return (
    <ChakraProvider theme={theme}>
      <InputStatesCtxProvider>
        <HightlightColorschemeProvider>{children}</HightlightColorschemeProvider>
      </InputStatesCtxProvider>
    </ChakraProvider>
  )
}
