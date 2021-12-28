import { createContext, useState, Dispatch, SetStateAction } from 'react'

interface ICtxValue {
  isOpen?: boolean
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}

const initialCtxValue: ICtxValue = {}
export const MobileMenuContext = createContext(initialCtxValue)

export default function MobileMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const valueObj: ICtxValue = { isOpen, setIsOpen }

  return <MobileMenuContext.Provider value={valueObj}>{children}</MobileMenuContext.Provider>
}
