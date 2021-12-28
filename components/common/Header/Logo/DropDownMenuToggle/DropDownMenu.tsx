import { VStack } from '@chakra-ui/react'
import { gray, white } from 'lib/chakraColors'
import DropDownItem from './DropDownItem'

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
