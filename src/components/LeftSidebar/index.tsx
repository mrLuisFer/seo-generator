import { useRef } from 'react';
import { Box, VStack, Heading, useColorModeValue, Switch } from '@chakra-ui/react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import InputForm from './formComponents/InputForm';
import TextareaForm from './formComponents/TextareaForm';
import FadeIn from 'components/common/Transitions/FadeIn';
import HoverPopup from 'lib/HoverPopup';
import { useLabelHelpers } from 'hooks/useLabelHelpers';

export default function LeftSidebar() {
  const { descriptionTextarea, setDescriptionTextarea, titleInput, setTitleInput, author, setAuthor, ogUrl, setOgUrl } =
    useGetInputStates();

  const { setCapitalizedText, capitalizedText } = useLabelHelpers();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const authorRef = useRef(null);
  const ogUrlRef = useRef(null);

  return (
    <Box as="section" borderRight="1px solid" p="1rem" borderColor={useColorModeValue('border.100', 'gray.700')}>
      <FadeIn>
        <Heading as="h2" fontSize="1rem" mb="1rem">
          Metadata
        </Heading>
        <VStack as="form" spacing="1.2rem">
          <InputForm
            inputId="ogUrl"
            value={ogUrl}
            placeholder="seo-generator.vercel.app"
            infoTxt="The ogUrl of the page, this is the most important part of the SEO"
            state={ogUrl}
            setState={setOgUrl}
            ref={ogUrlRef}
          />
          <InputForm
            inputId="titleInput"
            labelValue="Title"
            placeholder="A awesome title"
            value={titleInput}
            required
            infoTxt="The title of the page, this is the most important part of the SEO"
            state={titleInput}
            setState={setTitleInput}
            ref={titleRef}
          >
            <HoverPopup text="Text Capitalized" width="105px" textSize="0.65rem" top="20px">
              <Switch
                size="md"
                colorScheme={useColorModeValue('blue', 'teal')}
                onChange={() => setCapitalizedText((prevState: boolean) => !prevState)}
                isChecked={capitalizedText}
              />
            </HoverPopup>
          </InputForm>
          <TextareaForm
            labelValue="Description"
            placeholder="A nice site created with some tech stack :D"
            required
            resize="none"
            infoTxt="The description of the page, this is the most important part of the SEO"
            textareaId="descriptionTextarea"
            state={descriptionTextarea}
            setState={setDescriptionTextarea}
            ref={descriptionRef}
          />
          <InputForm
            inputId="author"
            value={author}
            labelValue="Author"
            placeholder="mrLuisFer"
            infoTxt="The author of the page, this is the most important part of the SEO"
            state={author}
            setState={setAuthor}
            ref={authorRef}
          />
        </VStack>
      </FadeIn>
    </Box>
  );
}
