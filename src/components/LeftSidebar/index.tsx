import { useRef } from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import InputForm from './formComponents/InputForm';
import TextareaForm from './formComponents/TextareaForm';
import FadeIn from 'components/common/Transitions/FadeIn';

export default function LeftSidebar() {
  const { descriptionTextarea, setDescriptionTextarea, titleInput, setTitleInput, author, setAuthor } =
    useGetInputStates();

  const titleRef = useRef<any>(null);
  const descriptionRef = useRef<any>(null);
  const authorRef = useRef<any>(null);

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    setTitleInput(titleRef.current.value);
    setDescriptionTextarea(descriptionRef.current.value);
    setAuthor(authorRef.current.value);
  };

  return (
    <Box as="section" borderRight="1px solid" p="1rem" borderColor="border.100">
      <FadeIn>
        <Heading as="h2" fontSize="1rem" mb="1rem">
          Metadata
        </Heading>
        <VStack as="form" onSubmit={(e) => handleSubmitForm(e)} spacing="1.2rem">
          <InputForm
            inputId="titleInput"
            labelValue="Title"
            placeholder="A awesome title"
            value={titleInput}
            required
            infoTxt="The title of the page, this is the most important part of the SEO"
            ref={titleRef}
          />
          <TextareaForm
            labelValue="Description"
            placeholder="A nice site created with some tech stack :D"
            required
            resize="none"
            infoTxt="The description of the page, this is the most important part of the SEO"
            value={descriptionTextarea}
            textareaId="descriptionTextarea"
            ref={descriptionRef}
          />

          <InputForm
            inputId="author"
            value={author}
            labelValue="Author"
            placeholder="mrLuisFer"
            infoTxt="The author of the page, this is the most important part of the SEO"
            ref={authorRef}
          />
          <button type="submit">asdf</button>
        </VStack>
      </FadeIn>
    </Box>
  );
}
