import { createContext, useState, Dispatch, SetStateAction } from 'react'

export interface ICtxSidebarValue {
  hideSidebar?: boolean
  setHideSidebar?: Dispatch<SetStateAction<boolean>>
}

const initialCtxValue: ICtxSidebarValue = {}
export const SidebarCtx = createContext(initialCtxValue)

export default function SidebarStateProvider({ children }) {
  const [hideSidebar, setHideSidebar] = useState<boolean>(false)

  const valueObj: ICtxSidebarValue = { hideSidebar, setHideSidebar }

  return <SidebarCtx.Provider value={valueObj}>{children}</SidebarCtx.Provider>
}
