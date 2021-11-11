import { Container } from '@chakra-ui/react'
import { useMobileMenuCtx } from '../../context/MobileMenuContext'
import Header from '../common/Header'
import MenuMobile from '../MenuMobile'

export default function Layout({ children }) {
  const { isOpen } = useMobileMenuCtx()

  return (
    <Container bg="gray.800" p="1rem" minH="100vh" maxW="container.lg">
      <Header />
      {children}
      <MenuMobile />
    </Container>
  )
}
