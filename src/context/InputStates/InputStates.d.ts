import { Dispatch, SetStateAction } from 'react'

export interface InputStatesCtxValue {
  descriptionTextarea?: string
  setDescriptionTextarea?: Dispatch<SetStateAction<string>>
  titleInput?: string
  setTitleInput?: Dispatch<SetStateAction<string>>
  author?: string
  setAuthor?: Dispatch<SetStateAction<string>>
  ogUrl?: string
  setOgUrl?: Dispatch<SetStateAction<string>>
  imgUrl?: any
  setImgUrl?: Dispatch<SetStateAction<any>>
}
