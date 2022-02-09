import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Box } from '@chakra-ui/react'
import { CgMenuCheese } from 'react-icons/cg'
import HeaderBtn from 'lib/CommonBtn'
import MenuMobile from 'components/MenuMobile'
import { nanoid } from 'nanoid'

export default function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box className="menuIcon">
        <HeaderBtn onClick={() => setIsOpen(true)} title="Open menu">
          <CgMenuCheese size="1.8rem" cursor="pointer" />
        </HeaderBtn>
      </Box>
      {typeof window !== 'undefined' &&
        createPortal(
          <MenuMobile setIsOpen={setIsOpen} isOpen={isOpen} />,
          document.querySelector('#menu-mobile'),
          nanoid()
        )}
    </>
  )
}
