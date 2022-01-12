import { useContext } from 'react'
import { MobileMenuContext, ICtxMobileMenuValue } from 'context/MobileMenuContext'

export const useMobileMenuCtx = (): ICtxMobileMenuValue => {
  const { isOpen, setIsOpen } = useContext(MobileMenuContext)
  return { isOpen, setIsOpen }
}
