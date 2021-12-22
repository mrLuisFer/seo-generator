import { useColorMode } from '@chakra-ui/react'
import HeaderBtn from './HeaderBtn'
import { BsFillMoonFill } from 'react-icons/bs'
import { FaRegSun } from 'react-icons/fa'

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  console.log(colorMode)

  return (
    <HeaderBtn onClick={toggleColorMode} display="flex" justifyContent="center" alignItems="center">
      {colorMode === 'light' ? <BsFillMoonFill /> : <FaRegSun />}
    </HeaderBtn>
  )
}
