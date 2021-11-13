import { Flex, Heading, Text, HStack } from '@chakra-ui/react'
import { SiSpringCreators } from 'react-icons/si'
import { teal } from '../../../lib/chakraColors'
import HoverPopup from '../HoverPopup'
import MenuIcon from './MenuIcon'

export default function Header() {
  return (
    <HStack as="header" align="center" mb="1rem" justifyContent="space-between">
      <Flex gridGap="0.5rem" alignItems="center">
        <HoverPopup text="Made by mrLuisFer">
          <Text color={teal.teal300}>
            <SiSpringCreators size="2rem" />
          </Text>
        </HoverPopup>
        <Heading as="h1" size="md">
          SEO Generator
        </Heading>
      </Flex>
      <MenuIcon />
    </HStack>
  )
}
