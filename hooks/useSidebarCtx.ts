import { useContext } from 'react'
import { SidebarCtx, ICtxSidebarValue } from 'context/SidebarCtx'

export const useSidebarCtx = (): ICtxSidebarValue => {
  const { hideSidebar, setHideSidebar } = useContext(SidebarCtx)
  return { hideSidebar, setHideSidebar }
}
