import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import SEO from 'components/common/SEO'
import MetaForm from 'components/home/MetaForm'

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
    <Box as="main">
      <SEO />
      <MetaForm
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
    </Box>
  )
}
