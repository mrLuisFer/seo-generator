import InputForm from './formComponents/InputForm'
import type { IStateOptionalInputsAction } from 'components/home/homeTypes'
import { useHandleInput } from 'hooks/useHandleInput'

export default function OptionalMetatagsInputs({
  optionalInputValues,
  setOptionalInputValues,
}: IStateOptionalInputsAction) {
  const { handleInputsChange } = useHandleInput({
    state: optionalInputValues,
    stateAction: setOptionalInputValues,
  })

  return (
    <>
      <InputForm
        inputId="ogUrlInput"
        inputType="text"
        labelValue="Og:Url"
        onChange={handleInputsChange}
        placeholder="https://some-page-url.com/"
      />
      <InputForm
        inputId="robotsInput"
        inputType="text"
        labelValue="Robots"
        onChange={handleInputsChange}
        placeholder="noindex, nofollow"
      />
      <InputForm
        inputId="ratingInput"
        inputType="text"
        labelValue="Rating"
        onChange={handleInputsChange}
        placeholder="adult"
      />
      <InputForm
        inputId="authorInput"
        inputType="text"
        labelValue="Author"
        onChange={handleInputsChange}
        placeholder="Author name"
      />
      <InputForm
        inputId="copyrightInput"
        inputType="text"
        labelValue="Copyright"
        onChange={handleInputsChange}
        placeholder="Copyright owner"
      />
    </>
  )
}
