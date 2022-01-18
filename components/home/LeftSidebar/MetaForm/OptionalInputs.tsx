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
        inputId="ogUrl"
        inputType="text"
        labelValue="Og:Url"
        onChange={handleInputsChange}
        placeholder="https://some-page-url.com/"
      />
      <InputForm
        inputId="robots"
        inputType="text"
        labelValue="Robots"
        onChange={handleInputsChange}
        placeholder="noindex, nofollow"
      />
      <InputForm
        inputId="rating"
        inputType="text"
        labelValue="Rating"
        onChange={handleInputsChange}
        placeholder="adult"
      />
      <InputForm
        inputId="author"
        inputType="text"
        labelValue="Author"
        onChange={handleInputsChange}
        placeholder="Author name"
      />
      <InputForm
        inputId="copyright"
        inputType="text"
        labelValue="Copyright"
        onChange={handleInputsChange}
        placeholder="Copyright owner"
      />
    </>
  )
}
