import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
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
    <Flex>
      <LeftSidebar
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues} />
      <RightSidebar />
    </Flex>
  )
}
