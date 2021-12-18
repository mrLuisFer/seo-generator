import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import LeftSidebar from "./LeftSidebar"
import RightSidebar from './RightSidebar'

const requiredInputsInitialState = {
  descriptionTextarea: '',
  imgInput: '',
  keywordsInput: '',
  ogTypeInput: '',
  titleInput: '',
}

const optionalInputsInitialState = {
  author: '',
  copyright: '',
  ogUrl: '',
  rating: '',
  robots: '',
}

export default function Home() {
  const [requiredInputValues, setRequiredInputValues] = useState(requiredInputsInitialState)
  const [optionalInputValues, setOptionalInputValues] = useState(optionalInputsInitialState)

  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr 1fr" gridGap="3rem">
      <LeftSidebar
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues} />
      <RightSidebar />
    </Box>
  )
}
