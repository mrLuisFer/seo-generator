import { VStack, Text } from '@chakra-ui/react'
import { gray, white } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'

function DropDownItem({ children }) {
  return (
    <Text
      _hover={{ background: gray.$600 }}
      fontWeight="semibold"
      cursor="pointer"
      p="0.5rem 3rem"
      userSelect="none"
      transition={transitionProperty('background')}
    >
      {children}
    </Text>
  )
}

export default function DropDownMenu() {
  return (
    <VStack
      position="absolute"
      bg={gray.$700}
      borderRadius="5px"
      color={white}
      marginTop="0.5rem"
      p="0.5rem 0"
      zIndex="10"
      spacing="0"
    >
      <DropDownItem>item</DropDownItem>
      <DropDownItem>item</DropDownItem>
      <DropDownItem>item</DropDownItem>
    </VStack>
  )
}
