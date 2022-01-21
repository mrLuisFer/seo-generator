import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { useSidebarCtx } from 'hooks/useSidebarCtx'
import ShowSidebarBtn from './RightSidebar/HeaderSidebar/HidesidebarBtn/ShowSidebarBtn'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

export default function Home() {
  // Required Inputs
  const [descriptionTextarea, setDescriptionTextarea] = useState('')
  const [keywordsInput, setKeywordsInput] = useState('')
  const [ogTypeInput, setOgTypeInput] = useState('')
  const [titleInput, setTitleInput] = useState('')

  // Optional Inputs
  const [author, setAuthor] = useState('')
  const [copyright, setCopyright] = useState('')
  const [ogUrl, setOgUrl] = useState('')
  const [rating, setRating] = useState('')
  const [robots, setRobots] = useState('')

  const { hideSidebar } = useSidebarCtx()
  const gridStyle = hideSidebar ? '1fr 1fr 1fr 50px' : '1fr 1fr 1fr 1fr 1fr'

  return (
    <Box display="grid" gridTemplateColumns={gridStyle} gridGap="2rem">
      <LeftSidebar
        setDescriptionTextarea={setDescriptionTextarea}
        setKeywordsInput={setKeywordsInput}
        setOgTypeInput={setOgTypeInput}
        setTitleInput={setTitleInput}
        setAuthor={setAuthor}
        setCopyright={setCopyright}
        setOgUrl={setOgUrl}
        setRating={setRating}
        setRobots={setRobots}
      />
      {!hideSidebar ? (
        <RightSidebar
          descriptionTextarea={descriptionTextarea}
          keywordsInput={keywordsInput}
          ogTypeInput={ogTypeInput}
          titleInput={titleInput}
          author={author}
          copyright={copyright}
          ogUrl={ogUrl}
          rating={rating}
          robots={robots}
        />
      ) : (
        <ShowSidebarBtn />
      )}
    </Box>
  )
}
