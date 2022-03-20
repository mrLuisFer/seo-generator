import { Flex, HStack, Box } from '@chakra-ui/react'
import MenuIcon from './MenuIcon'
import DarkModeToggle from './DarkModeToggle'
import Logo from './Logo'

export default function Header() {
  return (
    <Box as="section">
      <HStack as="header" align="center" mb="1rem" justifyContent="space-between">
        <Logo />
        <Flex justifyContent="space-between" alignItems="center" gridGap="1.5rem">
          <DarkModeToggle />
          <MenuIcon />
        </Flex>
      </HStack>
      <Box mb="1em">
        <hr />
      </Box>
    </Box>
  )
}
