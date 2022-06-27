import { Heading } from '@chakra-ui/react'
import { white } from 'utils/chakraColors'

export default function TagTitle({ children }: { children: any }) {
  return (
    <Heading as="h3" size="sm" mb="0.2rem" mt="1rem" letterSpacing="0.8px" color={white}>
      {children}
    </Heading>
  )
}
