import InputForm from './formComponents/InputForm'
import TextareaForm from './formComponents/TextareaForm'

export default function RequiredInputs({ requiredInputValues, setRequiredInputValues }) {
  const handleRequiredInputsChange = (e) => {
    const { name, value } = e.target
    setRequiredInputValues({
      ...requiredInputValues,
      [name]: value,
    })
  }

  return (
    <>
      <InputForm
        inputId="titleInput"
        labelValue="Title"
        onChange={handleRequiredInputsChange}
        placeholder="A awesome title"
        required
      />
      <TextareaForm
        labelValue="Description"
        onChange={handleRequiredInputsChange}
        placeholder="A nice site created with some tech stack :D"
        required
        resize="none"
        textareaId="descriptionTextarea"
      />
      <InputForm
        inputId="keywordsInput"
        labelValue="Keywords"
        onChange={handleRequiredInputsChange}
        placeholder="keyword 1, keyword 2, keyword 3"
        required
      />
      <InputForm
        inputId="imgInput"
        labelValue="Image"
        onChange={handleRequiredInputsChange}
        placeholder="https://unsplash.com/"
        required
      />
      <InputForm
        inputId="ogTypeInput"
        labelValue="Og:Type"
        onChange={handleRequiredInputsChange}
        placeholder="website"
      />
    </>
  )
}
