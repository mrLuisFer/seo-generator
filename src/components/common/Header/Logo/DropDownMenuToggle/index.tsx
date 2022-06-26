import { useState } from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { transitionProperty } from 'utils/transitionProperty';
import { useDarkMode } from 'hooks/useDarkMode';
import DropDownMenu from './DropDownMenu';
import ClickOutside from 'lib/ClickOutside';

export default function DropDownMenuToggle() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { isDarkMode } = useDarkMode();

  const fontColor = isDarkMode ? 'white' : 'black';

  return (
    <Box position="relative">
      <Flex
        _hover={{
          color: 'white',
          background: 'fill.300',
          opacity: 1,
        }}
        alignItems="center"
        as="section"
        bg={isShowMenu ? 'fill.300' : 'transparent'}
        border="transparent"
        borderRadius="5px"
        color={isShowMenu ? 'white' : fontColor}
        cursor="pointer"
        h="auto"
        onClick={() => setIsShowMenu((prevState) => !prevState)}
        opacity={isShowMenu ? 1 : 0.5}
        p={0}
        title={!isShowMenu && 'Click to show social media'}
        transition={transitionProperty()}
        userSelect="none"
        w="auto"
      >
        <Text
          fontSize="1.6rem"
          transform={isShowMenu ? 'rotate(-180deg)' : 'rotate(0deg)'}
          transition={transitionProperty('all')}
        >
          <MdOutlineKeyboardArrowDown />
        </Text>
      </Flex>
      {isShowMenu && (
        <ClickOutside stateFunc={setIsShowMenu}>
          <DropDownMenu />
        </ClickOutside>
      )}
    </Box>
  );
}
