import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import MobileMenuProvider from 'context/MobileMenuContext'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MobileMenuProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MobileMenuProvider>
    </ChakraProvider>
  )
}

export default MyApp
