import { VStack, Text } from '@chakra-ui/react'
import { gray, white } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'

function DropDownItem({ children }) {
  return (
    <Text
      _hover={{ background: gray.$600 }}
      cursor="pointer"
      fontWeight="semibold"
      p="0.5rem 3rem"
      transition={transitionProperty('background')}
      userSelect="none"
    >
      {children}
    </Text>
  )
}

export default function DropDownMenu() {
  return (
    <VStack
      bg={gray.$700}
      borderRadius="5px"
      color={white}
      marginTop="0.5rem"
      p="0.5rem 0"
      position="absolute"
      spacing="0"
      zIndex="10"
    >
      <DropDownItem>item</DropDownItem>
      <DropDownItem>item</DropDownItem>
      <DropDownItem>item</DropDownItem>
    </VStack>
  )
}
