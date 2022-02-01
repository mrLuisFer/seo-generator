import { ChakraProvider } from '@chakra-ui/react'
import MobileMenuProvider from 'context/MobileMenuContext'
import SidebarCtxProvider from 'context/SidebarCtx'
import InputStatesCtxProvider from 'context/InputStates'

export default function ContextProviders({ children }: { children: any }) {
  return (
    <ChakraProvider>
      <InputStatesCtxProvider>
        <SidebarCtxProvider>
          <MobileMenuProvider>{children}</MobileMenuProvider>
        </SidebarCtxProvider>
      </InputStatesCtxProvider>
    </ChakraProvider>
  )
}
