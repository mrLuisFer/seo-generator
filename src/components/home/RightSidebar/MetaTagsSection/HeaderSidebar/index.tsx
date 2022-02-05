import { Flex, HStack } from '@chakra-ui/react'
import HidesidebarBtn from './HidesidebarBtn'
import HideTitleBtn from './HideTitlesBtn'
import CopyTextBtn from './CopyTextBtn'
import CleanInputsBtn from './CleanInputsBtn'

interface HeaderSidebarProps {
  copyFunc: () => void
}

// eslint-disable-next-line react/display-name
const HeaderSidebar = ({ copyFunc }: HeaderSidebarProps) => {
  return (
    <Flex justify="space-between">
    <CleanInputsBtn />
      <HStack alignItems="center" spacing="1.5rem">
        <CopyTextBtn clickFunc={copyFunc} />
        <HideTitleBtn />
        <HidesidebarBtn />
      </HStack>
    </Flex>
  )
}

export default HeaderSidebar
