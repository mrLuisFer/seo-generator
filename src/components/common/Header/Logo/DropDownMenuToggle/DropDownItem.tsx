import { HStack, Text } from '@chakra-ui/react'
import { useDarkMode } from 'hooks/useDarkMode'
import { transitionProperty } from 'utils/transitionProperty'
import { gray, white, black } from 'utils/chakraColors'

interface DropDownItemProps {
  children: any
  text: string
}

export default function DropDownItem({ children, text }: DropDownItemProps) {
  const { isDarkMode } = useDarkMode()

  return (
    <HStack
      _hover={{ background: isDarkMode ? gray.$600 : gray.$400 }}
      cursor="pointer"
      fontWeight="semibold"
      p="0.5rem 1.5rem"
      transition={transitionProperty('background')}
      userSelect="none"
      color={isDarkMode ? white : black}
      spacing="10px"
      w="100%"
      justifyContent="space-evenly"
    >
      {children}
      <Text m={0}>{text}</Text>
    </HStack>
  )
}
