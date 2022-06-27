import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import CommonBtn from 'lib/CommonBtn';
import { BsFillMoonFill } from 'react-icons/bs';
import { FaRegSun } from 'react-icons/fa';
import HoverPopup from 'lib/HoverPopup';

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HoverPopup
      text={`Change to ${useColorModeValue('dark', 'light')} mode`}
      width="140px"
      bgColor={useColorModeValue('gray.700', 'gray.300')}
      height="auto"
      right="10px"
      top="35px"
    >
      <CommonBtn onClick={toggleColorMode} display="flex" justifyContent="center" alignItems="center" >
        {colorMode === 'light' ? <BsFillMoonFill size="1.2rem" /> : <FaRegSun size="1.2rem" />}
      </CommonBtn>
    </HoverPopup>
  );
}
