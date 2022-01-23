import { Flex, HStack } from '@chakra-ui/react'
import HidesidebarBtn from './HidesidebarBtn'
import HideTitleBtn from './HideTitlesBtn'
import CopyTextBtn from './CopyTextBtn'

export default function HeaderSidebar() {
  return (
    <Flex justify="flex-end">
      <HStack alignItems="center" spacing="1.5rem">
        <CopyTextBtn />
        <HideTitleBtn />
        <HidesidebarBtn />
      </HStack>
    </Flex>
  )
}
