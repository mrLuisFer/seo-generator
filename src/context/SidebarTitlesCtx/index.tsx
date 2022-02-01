import { createContext, useState, Dispatch, SetStateAction, useContext } from 'react'

export interface SidebarTitlesCtxValue {
  showTitles?: boolean
  setShowTitles?: Dispatch<SetStateAction<boolean>>
}

const initialCtxValue: SidebarTitlesCtxValue = {}
export const SidebarTitlesCtx = createContext(initialCtxValue)

export default function SidebarTitlesCtxProvider({ children }: { children: any }) {
  const [showTitles, setShowTitles] = useState<boolean>(true)

  const valueObj: SidebarTitlesCtxValue = { showTitles, setShowTitles }

  return <SidebarTitlesCtx.Provider value={valueObj}>{children}</SidebarTitlesCtx.Provider>
}

export const useSidebarTitlesCtx = () => {
  const ctx: SidebarTitlesCtxValue = useContext(SidebarTitlesCtx)
  if (ctx === undefined) {
    throw new Error('useSidebarTitlesCtx must be used within a SidebarTitlesCtxProvider')
  }
  return ctx
}
