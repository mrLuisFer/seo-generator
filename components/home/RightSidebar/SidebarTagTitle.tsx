import { Heading } from '@chakra-ui/react'
import { white } from 'lib/chakraColors'

export default function SidebarTagTitle({ children }: { children: any }) {
  return (
    <Heading as="h3" size="sm" mb="0.2rem" mt="1rem" color={white}>
      {children}
    </Heading>
  )
}
