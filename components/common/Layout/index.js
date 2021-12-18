import { Container } from '@chakra-ui/react'
import Header from '../Header'
import MenuMobile from '../../MenuMobile'

export default function Layout({ children }) {
  return (
    <Container minW="100vw" p="1rem 2rem">
      <Header />
      {children}
      <MenuMobile />
    </Container>
  )
}
