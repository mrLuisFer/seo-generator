import Link from 'next/link'
import { Flex, Heading, Text, HStack } from '@chakra-ui/react'
import { SiSpringCreators } from 'react-icons/si'
import HoverPopup from '../HoverPopup'
import MenuIcon from './MenuIcon'

export default function Header() {
  return (
    <HStack as="header" align="center" mb="1rem" justifyContent="space-between">
      <Flex gridGap="0.5rem" alignItems="center" cursor="pointer">
        <HoverPopup text="Made by mrLuisFer" width="8rem">
          <Text>
            <SiSpringCreators size="2rem" />
          </Text>
        </HoverPopup>
        <Heading as="h1" size="md" userSelect="none">
          <Link href="/" key="home">
            SEO Generator
          </Link>
        </Heading>
      </Flex>
      <MenuIcon />
    </HStack>
  )
}
