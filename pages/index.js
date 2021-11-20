import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import SEO from 'components/common/SEO'
import MetaForm from 'components/home/MetaForm'

const requiredInputsInitialState = {
  titleInput: '',
  descriptionTextarea: '',
  keywordsInput: '',
  imgInput: '',
  ogTypeInput: '',
}

const optionalInputsInitialState = {
  ogUrl: '',
  robots: '',
  rating: '',
  author: '',
  copyright: '',
}

export default function Home() {
  const [requiredInputValues, setRequiredInputValues] = useState(requiredInputsInitialState)
  const [optionalInputValues, setOptionalInputValues] = useState(optionalInputsInitialState)

  return (
    <Box as="main">
      <SEO />
      <MetaForm
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setRequiredInputValues={setRequiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
      />
    </Box>
  )
}
