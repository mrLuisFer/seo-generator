import { useColorMode } from '@chakra-ui/react'
import CommonBtn from 'lib/CommonBtn'
import { BsFillMoonFill } from 'react-icons/bs'
import { FaRegSun } from 'react-icons/fa'
import HoverPopup from 'lib/HoverPopup'
import { useDarkMode } from 'hooks/useDarkMode'

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isDarkMode } = useDarkMode()
  const txtMode = !isDarkMode ? 'dark' : 'light'

  return (
    <HoverPopup
      text={`Change to ${txtMode} mode`}
      width="100px"
      bgColor={isDarkMode ? 'gray.300' : 'gray.600'}
      height="auto"
      right="10px"
      top="35px"
    >
      <CommonBtn
        onClick={toggleColorMode}
        display="flex"
        justifyContent="center"
        alignItems="center"
        background="fill.300"
        color="white"
      >
        {colorMode === 'light' ? <BsFillMoonFill size="1.2rem" /> : <FaRegSun size="1.2rem" />}
      </CommonBtn>
    </HoverPopup>
  )
}
