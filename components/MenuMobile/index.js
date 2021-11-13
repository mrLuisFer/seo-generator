import { Box, Slide, useMediaQuery, Flex, Heading, Text } from '@chakra-ui/react'
import { MdOutlineClose } from 'react-icons/md'
import { useMobileMenuCtx } from 'context/MobileMenuContext'
import { gray, teal } from 'lib/chakraColors'
import HoverPopup from '../common/HoverPopup'

export default function MenuMobile() {
  const { isOpen, setIsOpen } = useMobileMenuCtx()
  const [isLargerThan450] = useMediaQuery(['(min-width: 450px)'])

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <Slide direction="right" in={isOpen}>
      <Box
        as="aside"
        bg={gray.gray700}
        borderRadius={isLargerThan450 ? '10px 0 0 10px' : '0'}
        minH="100vh"
        p="1rem"
        position="fixed"
        right="0"
        top="0"
        w={isLargerThan450 ? '20rem' : '100%'}
      >
        <Flex align="center" justify="space-between">
          <Heading as="h2" fontSize="md">
            Menu
          </Heading>
          <HoverPopup text="Close menu" bgColor={gray.gray900}>
            <Text
              _hover={{ color: teal.teal300 }}
              cursor="pointer"
              display="inline-block"
              onClick={handleCloseMenu}
            >
              <MdOutlineClose size="1.8rem" />
            </Text>
          </HoverPopup>
        </Flex>
      </Box>
    </Slide>
  )
}
