import { Flex, HStack } from '@chakra-ui/react'
import MenuIcon from './MenuIcon'
import Contributors from './Contributors'
import DarkModeToggle from './DarkModeToggle'
import Logo from './Logo'

export default function Header() {
  return (
    <HStack as="header" align="center" mb="1rem" justifyContent="space-between">
      <Logo />
      <Flex justifyContent="space-between" alignItems="center" gridGap="1.5rem">
        <DarkModeToggle />
        <Contributors />
        <MenuIcon />
      </Flex>
    </HStack>
  )
}
