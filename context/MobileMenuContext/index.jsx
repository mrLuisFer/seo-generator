import { createContext, useState, useContext } from 'react'

const MobileMenuContext = createContext({ isOpen: false, setIsOpen: () => false })

export default function MobileMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export const useMobileMenuCtx = () => {
  const { isOpen, setIsOpen } = useContext(MobileMenuContext)
  return { isOpen, setIsOpen }
}
