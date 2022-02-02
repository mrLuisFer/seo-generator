import { createContext, useState } from 'react'
import type { InputStatesCtxValue } from './InputStates'

const initialCtxValue: InputStatesCtxValue = {}
export const InputStatesCtx = createContext(initialCtxValue)

export default function InputStatesCtxProvider({ children }: { children: any }) {
  // Required Inputs
  const [descriptionTextarea, setDescriptionTextarea] = useState('')
  const [ogTypeInput, setOgTypeInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  // Optional Inputs
  const [author, setAuthor] = useState('')
  const [ogUrl, setOgUrl] = useState('')
  const [rating, setRating] = useState('')
  const [robots, setRobots] = useState('')

  const valueObj: InputStatesCtxValue = {
    descriptionTextarea,
    setDescriptionTextarea,
    ogTypeInput,
    setOgTypeInput,
    titleInput,
    setTitleInput,
    author,
    setAuthor,
    ogUrl,
    setOgUrl,
    rating,
    setRating,
    robots,
    setRobots,
  }

  return <InputStatesCtx.Provider value={valueObj}>{children}</InputStatesCtx.Provider>
}
