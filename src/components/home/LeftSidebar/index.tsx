import { Box, VStack } from '@chakra-ui/react'
import { useGetInputStates } from 'hooks/useGetInputStates'
import InputForm from './formComponents/InputForm'
import TextareaForm from './formComponents/TextareaForm'
import FadeIn from 'components/common/Transitions/FadeIn'
import OgImg from './customFormComponents/OgImg'
import { useSidebarCtx } from 'hooks/useSidebarCtx'

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
    ogImg,
    setOgImg,
    ogImgWidth,
    setOgImgWidth,
    ogImgHeight,
    setOgImgHeight,
    setThemeColor,
    themeColor,
  } = useGetInputStates()

  const {hideSidebar} = useSidebarCtx()

  return (
    <Box as="section" gridColumn={hideSidebar ? "span 3" : "span 2"}>
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
            placeholder="mrLuisFer"
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
          <OgImg setOgImg={setOgImg} ogImg={ogImg} setOgImgWidth={setOgImgWidth} setOgImgHeight={setOgImgHeight} ogImgWidth={ogImgWidth} ogImgHeight={ogImgHeight} />
          <InputForm
            labelValue="Themecolor"
            infoTxt="The themecolor of the page, this is the most important part of the SEO"
            inputId="themeColor"
            setState={setThemeColor}
            value={themeColor}
            placeholder="#000000"
          />
        </VStack>
      </FadeIn>
    </Box>
  )
}
