import { createContext, useState, Dispatch, SetStateAction } from 'react'

export interface ICtxMobileMenuValue {
  isOpen?: boolean
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}

const initialCtxValue: ICtxMobileMenuValue = {}
export const MobileMenuContext = createContext(initialCtxValue)

export default function MobileMenuProvider({ children }: { children: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const valueObj: ICtxMobileMenuValue = { isOpen, setIsOpen }

  return <MobileMenuContext.Provider value={valueObj}>{children}</MobileMenuContext.Provider>
}
