import { Box } from '@chakra-ui/react'
import SEO from 'components/common/SEO'
import MetaForm from 'components/home/MetaForm'

export default function Home() {
  return (
    <Box as="main">
      <SEO />
      <MetaForm />
    </Box>
  )
}
