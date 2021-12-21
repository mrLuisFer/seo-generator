import { CgMenuCheese } from 'react-icons/cg'
import { useMobileMenuCtx } from 'context/MobileMenuContext'
import HeaderBtn from './HeaderBtn'

export default function MenuIcon() {
  const { setIsOpen } = useMobileMenuCtx()

  const handleOpenMenu = () => {
    setIsOpen(true)
  }

  return (
    <HeaderBtn onClick={handleOpenMenu} title="Open menu">
      <CgMenuCheese size="1.8rem" cursor="pointer" />
    </HeaderBtn>
  )
}
