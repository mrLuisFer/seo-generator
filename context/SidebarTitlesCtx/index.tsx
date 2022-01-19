import { createContext, useState, Dispatch, SetStateAction, useContext } from 'react'

export interface ICtxMobileMenuValue {
  showTitles?: boolean
  setShowTitles?: Dispatch<SetStateAction<boolean>>
}

const initialCtxValue: ICtxMobileMenuValue = {}
export const SidebarTitlesCtx = createContext(initialCtxValue)

export default function SidebarTitlesCtxProvider({ children }: { children: any }) {
  const [showTitles, setShowTitles] = useState<boolean>(true)

  const valueObj: ICtxMobileMenuValue = { showTitles, setShowTitles }

  return <SidebarTitlesCtx.Provider value={valueObj}>{children}</SidebarTitlesCtx.Provider>
}

export const useSidebarTitlesCtx = () => {
  const ctx: ICtxMobileMenuValue = useContext(SidebarTitlesCtx)
  if (ctx === undefined) {
    throw new Error('useSidebarTitlesCtx must be used within a SidebarTitlesCtxProvider')
  }
  return ctx
}
