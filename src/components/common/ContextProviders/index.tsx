import { ChakraProvider } from '@chakra-ui/react'
import SidebarCtxProvider from 'context/SidebarCtx'
import InputStatesCtxProvider from 'context/InputStates'
import HightlightColorschemeProvider from 'context/HighlightColorschemeCtx'

export default function ContextProviders({ children }: { children: any }) {
  return (
    <ChakraProvider>
      <InputStatesCtxProvider>
        <SidebarCtxProvider>
          <HightlightColorschemeProvider>{children}</HightlightColorschemeProvider>
        </SidebarCtxProvider>
      </InputStatesCtxProvider>
    </ChakraProvider>
  )
}
