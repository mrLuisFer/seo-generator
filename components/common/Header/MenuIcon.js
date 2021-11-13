import { Box } from '@chakra-ui/react'
import { CgMenuCheese } from 'react-icons/cg'
import { useMobileMenuCtx } from '../../../context/MobileMenuContext'
import { teal } from '../../../lib/chakraColors'
import { transitionProperty } from '../../../lib/transitionProperty'

export default function MenuIcon() {
  const { setIsOpen } = useMobileMenuCtx()

  const handleOpenMenu = () => {
    setIsOpen(true)
  }

  return (
    <Box
      _hover={{ color: teal.teal300 }}
      transition={transitionProperty('color')}
      display="inline-block"
      onClick={handleOpenMenu}
    >
      <CgMenuCheese size="1.8rem" cursor="pointer" />
    </Box>
  )
}
