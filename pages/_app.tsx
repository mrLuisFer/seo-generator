import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import MobileMenuProvider from 'context/MobileMenuContext'
import SidebarCtxProvider from 'context/SidebarCtx'
import Layout from 'components/common/Layout'
import InputStatesCtxProvider from 'context/InputStates'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <InputStatesCtxProvider>
        <SidebarCtxProvider>
          <MobileMenuProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MobileMenuProvider>
        </SidebarCtxProvider>
      </InputStatesCtxProvider>
    </ChakraProvider>
  )
}

export default MyApp
