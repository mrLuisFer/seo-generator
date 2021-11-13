import { VStack } from '@chakra-ui/react'
import InputForm from './InputForm'
import TextareaForm from './TextareaForm'

export default function MetaForm() {
  return (
    <VStack as="form">
      <InputForm inputId="titleInput" labelValue="Title" placeholder="A awesome title" required />
      <TextareaForm
        labelValue="Description"
        placeholder="A nice site created with some tech stack :D"
        textareaId="descriptionTextarea"
        required
        resize="none"
      />
      <InputForm inputId="imgInput" labelValue="Image" placeholder="https://unsplash.com/" />
      <InputForm inputId="ogTypeInput" labelValue="Og:Type" placeholder="website" />
      <InputForm inputId="ogUrlInput" labelValue="Og:Url" placeholder="https://some-shite.com/" />
      <InputForm
        inputId="keywordsInput"
        labelValue="Keywords"
        placeholder="keyword 1, keyword 2, keyword 3"
      />
      <InputForm inputId="robotsInput" labelValue="Robots" placeholder="noindex, nofollow" />
      <InputForm inputId="ratingInput" labelValue="Rating" placeholder="adult" />
      {/* <meta name="author" content="Author name" /> */}
      {/* <meta name="copyright" content="Copyright owner" /> */}

      {/* TODO: add a button to show more metatags inputs, 
      and a button for save the values in a global context */}
    </VStack>
  )
}
