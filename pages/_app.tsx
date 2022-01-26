import '../styles/globals.css'
import Layout from 'components/common/Layout'
import ContextProviders from 'components/common/ContextProviders'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProviders>
  )
}

export default MyApp
