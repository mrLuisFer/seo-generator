import { Flex, HStack } from '@chakra-ui/react'
import HidesidebarBtn from './HidesidebarBtn'
import CopyTextBtn from './CopyTextBtn'
import CleanInputsBtn from './CleanInputsBtn'
import { gray } from 'utils/chakraColors'

type HeaderSidebarProps = {
  copyFunc: () => void
}

// eslint-disable-next-line react/display-name
const HeaderSidebar = ({ copyFunc }: HeaderSidebarProps) => {
  return (
    <Flex display={{base: "none", md: "flex"}} justify="space-between" p="0.7rem 1rem 0.7rem 1rem" my="0.5rem" bg={gray.$700} borderRadius="10px">
      <CleanInputsBtn />
      <HStack alignItems="center" spacing="1.5rem">
        <CopyTextBtn clickFunc={copyFunc} />
        <HidesidebarBtn />
      </HStack>
    </Flex>
  )
}

export default HeaderSidebar
