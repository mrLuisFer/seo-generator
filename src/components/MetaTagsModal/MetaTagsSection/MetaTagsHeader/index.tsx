import { Flex, HStack, Box } from '@chakra-ui/react';
import CopyTextBtn from './CopyTextBtn';
import CleanInputsBtn from './CleanInputsBtn';
import SelectColorscheme from '../../SelectColorscheme';

type HeaderSidebarProps = {
  copyFunc: () => void;
};

export default function MetaTagsHeader({ copyFunc }: HeaderSidebarProps) {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      justify="space-between"
      p="0.7rem 1rem 0.7rem 1rem"
      bg="gray.700"
      borderRadius="0 0 10px 10px"
    >
      <Box display="flex" alignItems="center" gridGap="0.8rem">
        <CleanInputsBtn iconColor="#ffffff" />
        <SelectColorscheme />
      </Box>
      <HStack alignItems="center" spacing="1.5rem">
        <CopyTextBtn clickFunc={copyFunc} />
      </HStack>
    </Flex>
  );
}
