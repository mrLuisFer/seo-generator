import { Box } from '@chakra-ui/react'
import { gray } from 'lib/chakraColors'
import MetaTags from './MetaTags'
import HeaderSidebar from './HeaderSidebar'
import SidebarTitlesCtxProvider from 'context/SidebarTitlesCtx'

export default function RightSidebar({
  descriptionTextarea,
  setDescriptionTextarea,
  imgInput,
  setImgInput,
  keywordsInput,
  setKeywordsInput,
  ogTypeInput,
  setOgTypeInput,
  titleInput,
  setTitleInput,
  author,
  setAuthor,
  copyright,
  setCopyright,
  ogUrl,
  setOgUrl,
  rating,
  setRating,
  robots,
  setRobots,
}: any) {
  return (
    <Box
      as="section"
      bg={gray.$700}
      w="100%"
      h="100%"
      gridColumn="span 2"
      borderRadius="15px"
      p="1.5rem"
      boxShadow="md"
    >
      <SidebarTitlesCtxProvider>
        <HeaderSidebar />
        <MetaTags
          descriptionTextarea={descriptionTextarea}
          setDescriptionTextarea={setDescriptionTextarea}
          imgInput={imgInput}
          setImgInput={setImgInput}
          keywordsInput={keywordsInput}
          setKeywordsInput={setKeywordsInput}
          ogTypeInput={ogTypeInput}
          setOgTypeInput={setOgTypeInput}
          titleInput={titleInput}
          setTitleInput={setTitleInput}
          author={author}
          setAuthor={setAuthor}
          copyright={copyright}
          setCopyright={setCopyright}
          ogUrl={ogUrl}
          setOgUrl={setOgUrl}
          rating={rating}
          setRating={setRating}
          robots={robots}
          setRobots={setRobots}
        />
      </SidebarTitlesCtxProvider>
    </Box>
  )
}
