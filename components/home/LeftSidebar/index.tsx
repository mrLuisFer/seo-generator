import { Box, VStack } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import InputForm from './MetaForm/formComponents/InputForm'
import TextareaForm from './MetaForm/formComponents/TextareaForm'

interface LeftSidebarProps {
  [setStateFunction: string]: Dispatch<SetStateAction<string>>
}

export default function LeftSidebar({
  setDescriptionTextarea,
  setKeywordsInput,
  setOgTypeInput,
  setTitleInput,
  setAuthor,
  setCopyright,
  setOgUrl,
  setRating,
  setRobots,
}: LeftSidebarProps) {
  console.log(setKeywordsInput, setOgTypeInput, setAuthor, setCopyright, setOgUrl, setRating, setRobots)

  return (
    <Box as="section" gridColumn="span 3">
      <VStack as="form" spacing="1.2rem">
        <InputForm
          inputId="titleInput"
          labelValue="Title"
          placeholder="A awesome title"
          setState={setTitleInput}
          required
        />
        <TextareaForm
          labelValue="Description"
          placeholder="A nice site created with some tech stack :D"
          required
          resize="none"
          setStateValue={setDescriptionTextarea}
          textareaId="descriptionTextarea"
        />
        <InputForm
          inputId="keywordsInput"
          labelValue="Keywords"
          placeholder="keyword 1, keyword 2, keyword 3"
          setState={setKeywordsInput}
          required
        />
        <InputForm inputId="ogTypeInput" setState={setOgTypeInput} labelValue="Og:Type" placeholder="website" />
      </VStack>
    </Box>
  )
}
