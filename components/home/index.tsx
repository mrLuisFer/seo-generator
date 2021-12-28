import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import type { IOptionalInputs, IRequiredInputs } from './types'

const requiredInputsInitialState: IRequiredInputs = {
  descriptionTextarea: '',
  imgInput: '',
  keywordsInput: '',
  ogTypeInput: '',
  titleInput: '',
}

const optionalInputsInitialState: IOptionalInputs = {
  author: '',
  copyright: '',
  ogUrl: '',
  rating: '',
  robots: '',
}

export default function Home() {
  const [requiredInputValues, setRequiredInputValues] = useState<IRequiredInputs>(
    requiredInputsInitialState
  )
  const [optionalInputValues, setOptionalInputValues] = useState<IOptionalInputs>(
    optionalInputsInitialState
  )

  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr 1fr" gridGap="2rem">
      <LeftSidebar
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
      <RightSidebar
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
    </Box>
  )
}
