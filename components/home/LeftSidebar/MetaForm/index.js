import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import InputForm from './formComponents/InputForm'
import TextareaForm from './formComponents/TextareaForm'
import OptionalMetatagsInputs from './OptionalMetatagsInputs'
import GridLayout from './GridLayout'
import ShowOptInputsButton from './ShowOptInputsButton'

export default function MetaForm({
  requiredInputValues,
  setRequiredInputValues,
  optionalInputValues,
  setOptionalInputValues,
}) {
  const [showOptionalInputs, setShowOptionalInputs] = useState(false)

  const handleRequiredInputsChange = (e) => {
    const { name, value } = e.target
    setRequiredInputValues({
      ...requiredInputValues,
      [name]: value,
    })
  }

  return (
    <Box>
      <GridLayout>
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
      </GridLayout>
      <ShowOptInputsButton
        setShowOptionalInputs={setShowOptionalInputs}
        showOptionalInputs={showOptionalInputs}
      />
      {showOptionalInputs && (
        <OptionalMetatagsInputs
          optionalInputValues={optionalInputValues}
          setOptionalInputValues={setOptionalInputValues}
        />
      )}
    </Box>
  )
}
