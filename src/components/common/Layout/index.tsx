// import { Box, useColorModeValue } from '@chakra-ui/react'
import Header from '../Header'
// import { gray, white } from 'utils/chakraColors'

export default function Layout({ children }: { children: any }) {
  // const textColor = useColorModeValue(gray.$900, white)

  return (
    <>
      <Header />
      {children}
    </>
  )
}
