import { Dispatch, SetStateAction } from 'react'

export interface InputStatesCtxValue {
  descriptionTextarea?: string
  setDescriptionTextarea?: Dispatch<SetStateAction<string>>
  ogTypeInput?: string
  setOgTypeInput?: Dispatch<SetStateAction<string>>
  titleInput?: string
  setTitleInput?: Dispatch<SetStateAction<string>>
  author?: string
  setAuthor?: Dispatch<SetStateAction<string>>
  copyright?: string
  setCopyright?: Dispatch<SetStateAction<string>>
  ogUrl?: string
  setOgUrl?: Dispatch<SetStateAction<string>>
  rating?: string
  setRating?: Dispatch<SetStateAction<string>>
  robots?: string
  setRobots?: Dispatch<SetStateAction<string>>
}
