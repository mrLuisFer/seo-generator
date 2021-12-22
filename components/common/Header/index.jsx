import Link from 'next/link'
import { Flex, Heading, Text, HStack } from '@chakra-ui/react'
import { SiSpringCreators } from 'react-icons/si'
import { blue } from 'lib/chakraColors'
import HoverPopup from '../HoverPopup'
import MenuIcon from './MenuIcon'
import Contributors from './Contributors'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <HStack as="header" align="center" mb="1rem" justifyContent="space-between">
      <Flex gridGap="0.5rem" alignItems="center" cursor="pointer">
        <HoverPopup text="Made by mrLuisFer" width="8rem">
          <Text color={blue.$500}>
            <SiSpringCreators size="2rem" />
          </Text>
        </HoverPopup>
        <Heading as="h1" size="md" userSelect="none">
          <Link href="/" key="home">
            SEO Generator
          </Link>
        </Heading>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" gridGap="1.5rem">
        <DarkModeToggle />
        <Contributors />
        <MenuIcon />
      </Flex>
    </HStack>
  )
}
