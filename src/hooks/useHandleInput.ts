import { Dispatch, SetStateAction, ChangeEvent } from 'react'

interface HandleInputProps {
  state: any
  stateAction: Dispatch<SetStateAction<any>>
}

interface HandleInputReturns {
  // eslint-disable-next-line no-unused-vars
  handleInputsChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useHandleInput = ({ state, stateAction }: HandleInputProps): HandleInputReturns => {
  const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    stateAction({
      ...state,
      [name]: value,
    })
  }

  return {
    handleInputsChange,
  }
}
