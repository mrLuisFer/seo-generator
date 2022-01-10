import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import MobileMenuProvider from 'context/MobileMenuContext'
import SidebarCtxProvider from 'context/SidebarCtx'
import Layout from 'components/common/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SidebarCtxProvider>
        <MobileMenuProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MobileMenuProvider>
      </SidebarCtxProvider>
    </ChakraProvider>
  )
}

export default MyApp
