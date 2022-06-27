import { useState } from 'react';
import { Text, Box } from '@chakra-ui/react';
import { IoMdSettings } from 'react-icons/io';
import { transitionProperty } from 'utils/transitionProperty';
import DropDownMenu from './DropDownMenu';
import ClickOutside from 'lib/ClickOutside';
import CommonBtn from 'lib/CommonBtn';

export default function DropDownMenuToggle() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <Box position="relative" ml="0.5rem">
      <CommonBtn onClick={() => setIsShowMenu((prevState) => !prevState)}>
        <Text
          fontSize="1.6rem"
          transform={isShowMenu ? 'rotate(-90deg)' : 'rotate(0deg)'}
          transition={transitionProperty('all')}
        >
          <IoMdSettings size="1.5rem" />
        </Text>
      </CommonBtn>
      {isShowMenu && (
        <ClickOutside stateFunc={setIsShowMenu}>
          <DropDownMenu />
        </ClickOutside>
      )}
    </Box>
  );
}
