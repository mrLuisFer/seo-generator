import { useState } from 'react'
import { Button, Box } from '@chakra-ui/react'
import { CgMoreR } from 'react-icons/cg'
import { VscCollapseAll } from 'react-icons/vsc'
import InputForm from './InputForm'
import TextareaForm from './TextareaForm'
import OptionalMetatagsInputs from './OptionalMetatagsInputs'
import GridLayout from './GridLayout'

export default function MetaForm() {
  const [showOptionalInputs, setShowOptionalInputs] = useState(false)

  return (
    <Box>
      <GridLayout>
        <InputForm inputId="titleInput" labelValue="Title" placeholder="A awesome title" required />
        <TextareaForm
          labelValue="Description"
          placeholder="A nice site created with some tech stack :D"
          textareaId="descriptionTextarea"
          required
          resize="none"
        />
        <InputForm
          inputId="keywordsInput"
          labelValue="Keywords"
          placeholder="keyword 1, keyword 2, keyword 3"
          required
        />
        <InputForm
          inputId="imgInput"
          labelValue="Image"
          placeholder="https://unsplash.com/"
          required
        />
        <InputForm inputId="ogTypeInput" labelValue="Og:Type" placeholder="website" />
      </GridLayout>

      <Button
        onClick={() => setShowOptionalInputs((prevShowOptionalInputs) => !prevShowOptionalInputs)}
        colorScheme={showOptionalInputs ? 'blue' : 'teal'}
        variant={showOptionalInputs ? 'outline' : 'ghost'}
        leftIcon={showOptionalInputs ? <VscCollapseAll /> : <CgMoreR />}
      >
        {showOptionalInputs ? 'Hide optional inputs' : 'Show optional inputs'}
      </Button>
      {showOptionalInputs && <OptionalMetatagsInputs />}
    </Box>
  )
}
