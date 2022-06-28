import { Box, Heading, useColorModeValue, Button, Text } from '@chakra-ui/react';
import { BsArrowBarUp } from 'react-icons/bs';
import PreviewCards from './PreviewCards';
import { useState } from 'react';

export default function SocialSidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Box as="section" borderRight="1px solid" borderColor={useColorModeValue('border.100', 'gray.700')} pt="1rem">
      <Box display="flex" alignItems="center" justifyContent="space-between" m="0 1rem 1rem">
        <Heading as="h2" fontSize="1rem">
          Social Preview
        </Heading>
        <Button
          fontSize="1.5rem"
          p="0.3rem"
          borderRadius="4px"
          transition="0.2s ease"
          border="1px solid"
          borderColor="transparent"
          cursor="default"
          backgroundColor="transparent"
          display={{ base: 'block', md: 'none' }}
          _hover={{ borderColor: 'fill.300', borderRadius: '6px' }}
          onClick={() => setCollapsed((prev: boolean) => !prev)}
        >
          <Text transition="0.3s ease" transform={collapsed ? 'rotate(180deg)' : 'rotate(0deg)'}>
            <BsArrowBarUp />
          </Text>
        </Button>
      </Box>
      {!collapsed && <PreviewCards />}
    </Box>
  );
}
