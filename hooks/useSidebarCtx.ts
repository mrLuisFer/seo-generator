import { useContext } from 'react'
import { SidebarCtx } from 'context/SidebarCtx'

export const useSidebarCtx = () => {
  const { hideSidebar, setHideSidebar } = useContext(SidebarCtx)
  return { hideSidebar, setHideSidebar }
}
