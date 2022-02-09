import { Box } from '@chakra-ui/react'
import { CgMenuCheese } from 'react-icons/cg'
import { useMobileMenuCtx } from 'hooks/useMobileMenuCtx'
import HeaderBtn from 'lib/CommonBtn'

export default function MenuIcon() {
  const { setIsOpen } = useMobileMenuCtx()

  return (
    <Box className="menuIcon">
      <HeaderBtn onClick={() => setIsOpen(true)} title="Open menu">
        <CgMenuCheese size="1.8rem" cursor="pointer" />
      </HeaderBtn>
    </Box>
  )
}
