import { Box, VStack } from '@chakra-ui/react'
import { useGetInputStates } from 'hooks/useGetInputStates'
import InputForm from './MetaForm/formComponents/InputForm'
import TextareaForm from './MetaForm/formComponents/TextareaForm'

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
          infoTxt="The title of the page, this is the most important part of the SEO"
        />
        <TextareaForm
          labelValue="Description"
          placeholder="A nice site created with some tech stack :D"
          required
          resize="none"
          infoTxt="The description of the page, this is the most important part of the SEO"
          setStateValue={setDescriptionTextarea}
          textareaId="descriptionTextarea"
        />
        <InputForm
          inputId="keywordsInput"
          labelValue="Keywords"
          placeholder="keyword 1, keyword 2, keyword 3"
          setState={setKeywordsInput}
          infoTxt="The keywords are used to help search engines understand your content"
          required
        />
        <InputForm
          inputId="ogTypeInput"
          setState={setOgTypeInput}
          labelValue="Og:Type"
          placeholder="website"
          infoTxt="The type of the page, this is the most important part of the SEO"
        />
        <InputForm
          inputId="author"
          setState={setAuthor}
          labelValue="Author"
          placeholder="Jhon Doe"
          infoTxt="The author of the page, this is the most important part of the SEO"
        />
        <InputForm
          inputId="copyright"
          setState={setCopyright}
          labelValue="Copyright"
          placeholder="Your copyright placeholder"
          infoTxt="The copyright of the page, this is the most important part of the SEO"
        />
        <InputForm
          inputId="ogUrl"
          setState={setOgUrl}
          labelValue="OgUrl"
          placeholder="https://developer.mozilla.org"
          infoTxt="The url of the page, this is the most important part of the SEO"
        />
        <InputForm
          inputId="rating"
          setState={setRating}
          labelValue="Rating"
          placeholder="general"
          infoTxt="The reting of the page, this is the most important part of the SEO"
        />
        <InputForm
          inputId="robots"
          setState={setRobots}
          labelValue="Robots"
          placeholder="noindex"
          infoTxt="The robots of the page, this is the most important part of the SEO"
        />
      </VStack>
    </Box>
  )
}
