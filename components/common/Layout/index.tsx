import { Container, useColorModeValue } from '@chakra-ui/react'
import Header from '../Header'
import MenuMobile from '../../MenuMobile'
import { gray, white } from 'lib/chakraColors'

export default function Layout({ children }) {
  const textColor = useColorModeValue(gray.$900, white)

  return (
    <Container maxW="container.xl" p="1rem 2rem" color={textColor}>
      <Header />
      {children}
      <MenuMobile />
    </Container>
  )
}
