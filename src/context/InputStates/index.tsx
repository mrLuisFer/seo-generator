import { createContext, useState } from 'react'
import type { InputStatesCtxValue } from './InputStates'

const initialCtxValue: InputStatesCtxValue = {}
export const InputStatesCtx = createContext(initialCtxValue)

export default function InputStatesCtxProvider({ children }: { children: any }) {
  // Required Inputs
  const [descriptionTextarea, setDescriptionTextarea] = useState('')
  const [ogTypeInput, setOgTypeInput] = useState<string>('')
  const [titleInput, setTitleInput] = useState<string>('')
  // Optional Inputs
  const [author, setAuthor] = useState<string>('')
  const [ogUrl, setOgUrl] = useState<string>('')
  const [rating, setRating] = useState<string>('')
  const [robots, setRobots] = useState<string>('')
  const [ogImg, setOgImg] = useState<string>('')
  const [ogImgWidth, setOgImgWidth] = useState<string>('3456')
  const [ogImgHeight, setOgImgHeight] = useState<string>('1728')
  const [themeColor, setThemeColor] = useState<string>('#000000')

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
    ogImg,
    setOgImg,
    ogImgWidth,
    setOgImgWidth,
    ogImgHeight,
    setOgImgHeight,
    themeColor,
    setThemeColor,
  }

  return <InputStatesCtx.Provider value={valueObj}>{children}</InputStatesCtx.Provider>
}
