import { Box, VStack, Heading } from '@chakra-ui/react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import InputForm from './formComponents/InputForm';
import TextareaForm from './formComponents/TextareaForm';
import FadeIn from 'components/common/Transitions/FadeIn';
import OgImg from './customFormComponents/OgImg';

export default function LeftSidebar() {
  const {
    descriptionTextarea,
    setDescriptionTextarea,
    ogTypeInput,
    setOgTypeInput,
    titleInput,
    setTitleInput,
    author,
    setAuthor,
  } = useGetInputStates();

  return (
    <Box as="section" borderRight="1px solid" p="1rem" borderColor="border.100">
      <FadeIn>
        <Heading as="h2" fontSize="1rem" mb="1rem">
          Metadata
        </Heading>
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
        </VStack>
      </FadeIn>
    </Box>
  );
}
