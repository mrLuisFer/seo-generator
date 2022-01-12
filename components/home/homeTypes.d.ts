import { Dispatch, SetStateAction } from 'react'

export interface IRequiredInputs {
  descriptionTextarea: string
  imgInput: string
  keywordsInput: string
  ogTypeInput: string
  titleInput: string
}

export interface IOptionalInputs {
  author: string
  copyright: string
  ogUrl: string
  rating: string
  robots: string
}

export interface IAllInputTypes {
  optionalInputValues: IOptionalInputs
  requiredInputValues: IRequiredInputs
  setOptionalInputValues: Dispatch<SetStateAction<IOptionalInputs>>
  setRequiredInputValues: Dispatch<SetStateAction<IRequiredInputs>>
}

export interface IStateOptionalInputsAction {
  setOptionalInputValues: Dispatch<SetStateAction<IOptionalInputs>>
  optionalInputValues: IOptionalInputs
}

export interface IStateRequiredInputsAction {
  requiredInputValues: IRequiredInputs
  setRequiredInputValues: Dispatch<SetStateAction<IRequiredInputs>>
}
