import { VStack } from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'
import { TiSocialTwitter } from 'react-icons/ti'
import { ImGithub } from 'react-icons/im'
import { gray } from 'lib/chakraColors'
import DropDownItem from './DropDownItem'
import { useDarkMode } from 'hooks/useDarkMode'

export default function DropDownMenu() {
  const { isDarkMode } = useDarkMode()

  return (
    <VStack
      bg={isDarkMode ? gray.$700 : gray.$300}
      borderRadius="5px"
      marginTop="0.5rem"
      p="0.5rem 0"
      position="absolute"
      spacing="0"
      zIndex="10"
    >
      <DropDownItem text="GitHub">
        <ImGithub />
      </DropDownItem>
      <DropDownItem text="LinkedIn">
        <BsLinkedin />
      </DropDownItem>
      <DropDownItem text="Twitter">
        <TiSocialTwitter size="1.5rem" />
      </DropDownItem>
    </VStack>
  )
}
