import { Container } from '@chakra-ui/react'
import Header from '../Header'
import MenuMobile from '../../MenuMobile'
import { gray } from 'lib/chakraColors'

export default function Layout({ children }) {
  return (
    <Container minW="100vw" p="1rem 2rem" color={gray.gray900}>
      <Header />
      {children}
      <MenuMobile />
    </Container>
  )
}
