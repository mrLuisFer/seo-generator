import { useState } from 'react'
import MetaForm from "./MetaForm"

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


export default function LeftSidebar() {
  const [requiredInputValues, setRequiredInputValues] = useState(requiredInputsInitialState)
  const [optionalInputValues, setOptionalInputValues] = useState(optionalInputsInitialState)


  return (
    <div>
      <MetaForm
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
    </div>
  )
}
