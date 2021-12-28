import { useColorMode } from '@chakra-ui/react'
import CommonBtn from '../CommonBtn'
import { BsFillMoonFill } from 'react-icons/bs'
import { FaRegSun } from 'react-icons/fa'
import HoverPopup from '../HoverPopup'
import { gray } from 'lib/chakraColors'
import { useDarkMode } from 'hooks/useDarkMode'

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isDarkMode } = useDarkMode()
  const txtMode = isDarkMode ? 'dark' : 'light'

  return (
    <HoverPopup
      text={`Change ${txtMode} mode`}
      width="130px"
      bgColor={isDarkMode ? gray.$300 : gray.$600}
      height="auto"
    >
      <CommonBtn
        onClick={toggleColorMode}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {colorMode === 'light' ? <BsFillMoonFill size="1.2rem" /> : <FaRegSun size="1.2rem" />}
      </CommonBtn>
    </HoverPopup>
  )
}
