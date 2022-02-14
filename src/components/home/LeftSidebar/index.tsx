import { Box, VStack } from '@chakra-ui/react'
import { useGetInputStates } from 'hooks/useGetInputStates'
import InputForm from './formComponents/InputForm'
import TextareaForm from './formComponents/TextareaForm'
import FadeIn from 'components/common/Transitions/FadeIn'

export default function LeftSidebar() {
  const {
    setDescriptionTextarea,
    setOgTypeInput,
    setTitleInput,
    setAuthor,
    setOgUrl,
    setRating,
    setRobots,
    robots,
    rating,
    titleInput,
    ogTypeInput,
    author,
    ogUrl,
    descriptionTextarea,
  } = useGetInputStates()

  return (
    <Box as="section" gridColumn="span 3">
      <FadeIn>
        <VStack as="form" spacing="1.2rem">
          <InputForm
            inputId="titleInput"
            labelValue="Title"
            placeholder="A awesome title"
            setState={setTitleInput}
            value={titleInput}
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
            value={descriptionTextarea}
            textareaId="descriptionTextarea"
          />
          <InputForm
            inputId="ogTypeInput"
            setState={setOgTypeInput}
            value={ogTypeInput}
            labelValue="Og:Type"
            placeholder="website"
            infoTxt="The type of the page, this is the most important part of the SEO"
          />
          <InputForm
            inputId="author"
            setState={setAuthor}
            value={author}
            labelValue="Author"
            placeholder="Jhon Doe"
            infoTxt="The author of the page, this is the most important part of the SEO"
          />
          <InputForm
            inputId="ogUrl"
            setState={setOgUrl}
            value={ogUrl}
            labelValue="OgUrl"
            placeholder="https://developer.mozilla.org"
            infoTxt="The url of the page, this is the most important part of the SEO"
          />
          <InputForm
            inputId="rating"
            setState={setRating}
            value={rating}
            labelValue="Rating"
            placeholder="general"
            infoTxt="The reting of the page, this is the most important part of the SEO"
          />
          <InputForm
            inputId="robots"
            setState={setRobots}
            value={robots}
            labelValue="Robots"
            placeholder="noindex"
            infoTxt="The robots of the page, this is the most important part of the SEO"
          />
        </VStack>
      </FadeIn>
    </Box>
  )
}
