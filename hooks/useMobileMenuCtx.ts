import { useContext } from 'react'
import { MobileMenuContext } from 'context/MobileMenuContext'

export const useMobileMenuCtx = () => {
  const { isOpen, setIsOpen } = useContext(MobileMenuContext)
  return { isOpen, setIsOpen }
}
