import { createContext, useState, Dispatch, SetStateAction } from 'react'

interface ICtxValue {
  hideSidebar?: boolean
  setHideSidebar?: Dispatch<SetStateAction<boolean>>
}

const initialCtxValue: ICtxValue = {}
export const SidebarCtx = createContext(initialCtxValue)

export default function SidebarStateProvider({ children }) {
  const [hideSidebar, setHideSidebar] = useState<boolean>(false)

  const valueObj: ICtxValue = { hideSidebar, setHideSidebar }

  return <SidebarCtx.Provider value={valueObj}>{children}</SidebarCtx.Provider>
}
