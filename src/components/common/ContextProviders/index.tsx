import { ChakraProvider } from '@chakra-ui/react'
import SidebarCtxProvider from 'context/SidebarCtx'
import InputStatesCtxProvider from 'context/InputStates'

export default function ContextProviders({ children }: { children: any }) {
  return (
    <ChakraProvider>
      <InputStatesCtxProvider>
        <SidebarCtxProvider>{children}</SidebarCtxProvider>
      </InputStatesCtxProvider>
    </ChakraProvider>
  )
}
