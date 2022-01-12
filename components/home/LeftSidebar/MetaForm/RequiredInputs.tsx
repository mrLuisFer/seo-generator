import InputForm from './formComponents/InputForm'
import TextareaForm from './formComponents/TextareaForm'
import type { IStateRequiredInputsAction } from 'components/home/homeTypes'
import { useHandleInput } from 'hooks/useHandleInput'

export default function RequiredInputs({
  requiredInputValues,
  setRequiredInputValues,
}: IStateRequiredInputsAction) {
  const { handleInputsChange } = useHandleInput({
    state: requiredInputValues,
    stateAction: setRequiredInputValues,
  })

  return (
    <>
      <InputForm
        inputId="titleInput"
        inputType="text"
        labelValue="Title"
        onChange={handleInputsChange}
        placeholder="A awesome title"
        required
      />
      <TextareaForm
        inputType="text"
        labelValue="Description"
        onChange={handleInputsChange}
        placeholder="A nice site created with some tech stack :D"
        required
        resize="none"
        textareaId="descriptionTextarea"
      />
      <InputForm
        inputId="keywordsInput"
        inputType="text"
        labelValue="Keywords"
        onChange={handleInputsChange}
        placeholder="keyword 1, keyword 2, keyword 3"
        required
      />
      <InputForm
        inputId="imgInput"
        inputType="text"
        labelValue="Image"
        onChange={handleInputsChange}
        placeholder="https://unsplash.com/"
        required
      />
      <InputForm
        inputId="ogTypeInput"
        inputType="text"
        labelValue="Og:Type"
        onChange={handleInputsChange}
        placeholder="website"
      />
    </>
  )
}
