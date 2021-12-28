import { Box } from '@chakra-ui/react'
import SEO from 'components/common/SEO'
import Home from 'components/home'

export default function Main() {
  return (
    <Box>
      <SEO title="Seo Generator" />
      <Home />
    </Box>
  )
}