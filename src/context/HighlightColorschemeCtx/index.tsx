import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface DefaultTypeState {
  value: any
  label: string
}

export interface ICtxValue {
  colorscheme?: DefaultTypeState
  setColorscheme?: Dispatch<SetStateAction<DefaultTypeState>>
}

export const HighlightColorschemeCtx = createContext({})

export default function HighlightColorschemeProvider({ children }: { children: any }) {
  const [colorscheme, setColorscheme] = useState<DefaultTypeState>({
    value: nord,
    label: 'nord',
  })

  const valueObj = { colorscheme, setColorscheme }
  return <HighlightColorschemeCtx.Provider value={valueObj}>{children}</HighlightColorschemeCtx.Provider>
}

export const useColorschemeCtx = () => {
  const ctx: ICtxValue = useContext(HighlightColorschemeCtx)
  if (ctx === undefined) {
    throw new Error('useHightlightColorschemeCtx must be used within a HighlightColorschemeProvider')
  }
  return ctx
}
