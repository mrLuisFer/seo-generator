import { Container, useColorModeValue } from '@chakra-ui/react'
import Header from '../Header'
import MenuMobile from 'components/MenuMobile'
import { gray, white } from 'utils/chakraColors'

export default function Layout({ children }: { children: any }) {
  const textColor = useColorModeValue(gray.$900, white)

  return (
    <Container as="main" maxW="container.xl" p="1rem 2rem" color={textColor}>
      <Header />
      {children}
      <MenuMobile />
    </Container>
  )
}
