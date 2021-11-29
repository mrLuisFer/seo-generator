import { Container } from '@chakra-ui/react'
import Header from '../Header'
import MenuMobile from '../../MenuMobile'

export default function Layout({ children }) {
  return (
    <Container bg="gray.800" p="2rem 3rem" minH="100vh" minW="100vw" m="0" maxW="container.lg">
      <Header />
      {children}
      <MenuMobile />
    </Container>
  )
}
