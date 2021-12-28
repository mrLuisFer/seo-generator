import { Text } from '@chakra-ui/react'
import { transitionProperty } from 'lib/transitionProperty'
import { gray, white } from 'lib/chakraColors'

export default function DropDownItem({ children }) {
  return (
    <Text
      _hover={{ background: gray.$600 }}
      cursor="pointer"
      fontWeight="semibold"
      p="0.5rem 3rem"
      transition={transitionProperty('background')}
      userSelect="none"
      color={white}
    >
      {children}
    </Text>
  )
}
