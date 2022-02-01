import Link from 'next/link'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { SiSpringCreators } from 'react-icons/si'
import HoverPopup from 'lib/HoverPopup'
import { blue } from 'utils/chakraColors'
import DropDownMenuToggle from './DropDownMenuToggle'

export default function Logo() {
  return (
    <Flex gridGap="0.5rem" alignItems="center">
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
      <DropDownMenuToggle />
    </Flex>
  )
}
