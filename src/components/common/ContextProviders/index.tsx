import { ChakraProvider } from '@chakra-ui/react'
import InputStatesCtxProvider from 'context/InputStates'
import HightlightColorschemeProvider from 'context/HighlightColorschemeCtx'

export default function ContextProviders({ children }: { children: any }) {
  return (
    <ChakraProvider>
      <InputStatesCtxProvider>
        <HightlightColorschemeProvider>{children}</HightlightColorschemeProvider>
      </InputStatesCtxProvider>
    </ChakraProvider>
  )
}
