import { useState } from 'react'
import { Text, Box } from '@chakra-ui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { gray, white, black } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'
import { useDarkMode } from 'hooks/useDarkMode'
import DropDownMenu from './DropDownMenu'
import ClickOutside from 'components/common/ClickOutside'

export default function DropDownMenuToggle() {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const { isDarkMode } = useDarkMode()

  const fontColor = isDarkMode ? white : black

  return (
    <Box position="relative">
      <Box
        _hover={{ background: gray.$700, color: white, opacity: 1 }}
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
        onClick={() => setIsShowMenu((prevState) => !prevState)}
        userSelect="none"
        title="Click to show social media"
        opacity={isShowMenu ? 1 : 0.5}
      >
        <Text
          fontSize="1.6rem"
          transform={isShowMenu ? 'rotate(-180deg)' : 'rotate(0deg)'}
          transition={transitionProperty('all')}
        >
          <MdOutlineKeyboardArrowDown />
        </Text>
      </Box>
      {isShowMenu && (
        <ClickOutside stateFunc={setIsShowMenu}>
          <DropDownMenu />
        </ClickOutside>
      )}
    </Box>
  )
}
