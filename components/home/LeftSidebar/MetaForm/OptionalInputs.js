import { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/spinner'
import InputForm from './formComponents/InputForm'
import { cyan } from 'lib/chakraColors'

export default function OptionalMetatagsInputs({ optionalInputValues, setOptionalInputValues }) {
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false)
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  const handleOptInputsChange = (e) => {
    const { name, value } = e.target
    setOptionalInputValues({
      ...optionalInputValues,
      [name]: value,
    })
  }

  return (
    <>
      {showSpinner ? (
        <Spinner size="xl" color={cyan.base} display="block" />
      ) : (
        <>
          <InputForm
            inputId="ogUrlInput"
            labelValue="Og:Url"
            onChange={handleOptInputsChange}
            placeholder="https://some-page-url.com/"
          />
          <InputForm
            inputId="robotsInput"
            labelValue="Robots"
            onChange={handleOptInputsChange}
            placeholder="noindex, nofollow"
          />
          <InputForm
            inputId="ratingInput"
            labelValue="Rating"
            onChange={handleOptInputsChange}
            placeholder="adult"
          />
          <InputForm
            inputId="authorInput"
            labelValue="Author"
            onChange={handleOptInputsChange}
            placeholder="Author name"
          />
          <InputForm
            inputId="copyrightInput"
            labelValue="Copyright"
            onChange={handleOptInputsChange}
            placeholder="Copyright owner"
          />
        </>
      )}
    </>
  )
}
