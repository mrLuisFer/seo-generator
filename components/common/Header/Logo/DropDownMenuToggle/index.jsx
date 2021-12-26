import { useState } from 'react'
import { Text, Box } from '@chakra-ui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { gray, white, black } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'
import { useDarkMode } from 'hooks/useDarkMode'
import HoverPopup from 'components/common/HoverPopup'
import DropDownMenu from './DropDownMenu'

export default function DropDownMenuToggle() {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const { isDarkMode } = useDarkMode()

  const handleShowMenu = () => setIsShowMenu((prevState) => !prevState)
  const fontColor = isDarkMode ? white : black

  return (
    <Box position="relative">
      <Box
        _hover={{ background: gray.$700, color: white }}
        as="section"
        bg={isShowMenu ? gray.$700 : 'transparent'}
        color={isShowMenu ? white : fontColor}
        border="transparent"
        cursor="pointer"
        p={0}
        h="auto"
        w="auto"
        transition={transitionProperty()}
        borderRadius="5px"
        onClick={handleShowMenu}
        userSelect="none"
        title="Click to show social media"
      >
        <Text
          fontSize="1.6rem"
          transform={isShowMenu ? 'rotate(-180deg)' : 'rotate(0deg)'}
          transition={transitionProperty('all')}
        >
          <MdOutlineKeyboardArrowDown />
        </Text>
      </Box>
      {isShowMenu && <DropDownMenu />}
    </Box>
  )
}
