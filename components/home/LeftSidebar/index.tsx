import { Box, VStack } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import InputForm from './MetaForm/formComponents/InputForm'
import TextareaForm from './MetaForm/formComponents/TextareaForm'
import { useGetInputStates } from 'hooks/useGetInputStates'

export default function LeftSidebar() {
  const {
    setDescriptionTextarea,
    setKeywordsInput,
    setOgTypeInput,
    setTitleInput,
    setAuthor,
    setCopyright,
    setOgUrl,
    setRating,
    setRobots,
  } = useGetInputStates()

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
        <InputForm inputId="author" setState={setAuthor} labelValue="Author" placeholder="Jhon Doe" />
        <InputForm
          inputId="copyright"
          setState={setCopyright}
          labelValue="Copyright"
          placeholder="Your copyright placeholder"
        />
        <InputForm inputId="ogUrl" setState={setOgUrl} labelValue="OgUrl" placeholder="https://developer.mozilla.org" />
        <InputForm inputId="rating" setState={setRating} labelValue="Rating" placeholder="general" />
        <InputForm inputId="robots" setState={setRobots} labelValue="Robots" placeholder="noindex" />
      </VStack>
    </Box>
  )
}
