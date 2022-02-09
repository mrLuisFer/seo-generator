import Link from 'next/link'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { SiSpringCreators } from 'react-icons/si'
import { blue } from 'utils/chakraColors'
import DropDownMenuToggle from './DropDownMenuToggle'

export default function Logo() {
  return (
    <Flex gridGap="0.5rem" alignItems="center">
      <Text color={blue.$500}>
        <SiSpringCreators size="2rem" />
      </Text>
      <Heading as="h1" size="md" userSelect="none">
        <Link href="/" key="home">
          SEO Generator
        </Link>
      </Heading>
      <DropDownMenuToggle />
    </Flex>
  )
}
