import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { CgMenuCheese } from 'react-icons/cg'
import HeaderBtn from 'lib/CommonBtn'
import MenuMobile from 'components/MenuMobile'
import Portal from "components/common/Portal"

export default function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box className="menuIcon">
        <HeaderBtn onClick={() => setIsOpen(true)} title="Open menu">
          <CgMenuCheese size="1.8rem" cursor="default" />
        </HeaderBtn>
      </Box>
      <Portal id="menu-mobile">
        <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen}  />
      </Portal>
   </>
  )
}
