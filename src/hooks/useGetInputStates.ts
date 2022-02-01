import { useContext } from 'react'
import { InputStatesCtx } from 'context/InputStates'
import type { InputStatesCtxValue } from 'context/InputStates/InputStates'

export const useGetInputStates = () => {
  const ctx: InputStatesCtxValue = useContext(InputStatesCtx)
  if (ctx === undefined) {
    throw new Error('useSidebarTitlesCtx must be used within a SidebarTitlesCtxProvider')
  }
  return ctx
}
