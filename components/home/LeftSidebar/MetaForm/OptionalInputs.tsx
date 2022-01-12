import { useCallback } from 'react'
import InputForm from './formComponents/InputForm'

export default function OptionalMetatagsInputs({ optionalInputValues, setOptionalInputValues }) {
  const handleOptInputsChange = useCallback(
    (e: any) => {
      const { name, value } = e.target
      setOptionalInputValues({
        ...optionalInputValues,
        [name]: value,
      })
    },
    [optionalInputValues, setOptionalInputValues]
  )

  return (
    <>
      <InputForm
        inputId="ogUrlInput"
        inputType="text"
        labelValue="Og:Url"
        onChange={handleOptInputsChange}
        placeholder="https://some-page-url.com/"
      />
      <InputForm
        inputId="robotsInput"
        inputType="text"
        labelValue="Robots"
        onChange={handleOptInputsChange}
        placeholder="noindex, nofollow"
      />
      <InputForm
        inputId="ratingInput"
        inputType="text"
        labelValue="Rating"
        onChange={handleOptInputsChange}
        placeholder="adult"
      />
      <InputForm
        inputId="authorInput"
        inputType="text"
        labelValue="Author"
        onChange={handleOptInputsChange}
        placeholder="Author name"
      />
      <InputForm
        inputId="copyrightInput"
        inputType="text"
        labelValue="Copyright"
        onChange={handleOptInputsChange}
        placeholder="Copyright owner"
      />
    </>
  )
}
