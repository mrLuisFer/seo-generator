import { HStack, Text } from '@chakra-ui/react'
import { transitionProperty } from 'lib/transitionProperty'
import { gray, white } from 'lib/chakraColors'

interface DropDownItemProps {
  children: any
  text: string
}

export default function DropDownItem({ children, text }: DropDownItemProps) {
  return (
    <HStack
      _hover={{ background: gray.$600 }}
      cursor="pointer"
      fontWeight="semibold"
      p="0.5rem 1.5rem"
      transition={transitionProperty('background')}
      userSelect="none"
      color={white}
      spacing="10px"
      w="100%"
      justifyContent="space-evenly"
    >
      {children}
      <Text m={0}>{text}</Text>
    </HStack>
  )
}
