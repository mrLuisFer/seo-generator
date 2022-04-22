import '../styles/globals.css'
import Layout from 'components/common/Layout'
import ContextProviders from 'components/common/ContextProviders'

const MyApp = ({ Component, pageProps }) => (
  <ContextProviders>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ContextProviders>
)

export default MyApp
