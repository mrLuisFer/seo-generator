import { Flex, HStack } from '@chakra-ui/react'
import HidesidebarBtn from './HidesidebarBtn'
import HideTitleBtn from './HideTitlesBtn'
import CopyTextBtn from './CopyTextBtn'

interface HeaderSidebarProps {
  copyFunc: () => void
}

// eslint-disable-next-line react/display-name
const HeaderSidebar = ({ copyFunc }: HeaderSidebarProps) => {
  return (
    <Flex justify="flex-end">
      <HStack alignItems="center" spacing="1.5rem">
        <CopyTextBtn clickFunc={copyFunc} />
        <HideTitleBtn />
        <HidesidebarBtn />
      </HStack>
    </Flex>
  )
}

export default HeaderSidebar
