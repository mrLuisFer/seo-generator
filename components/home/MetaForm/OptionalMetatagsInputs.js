import { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/spinner'
import InputForm from './formComponents/InputForm'
import GridLayout from './GridLayout'

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
        <Spinner size="xl" color="cyan" display="block" />
      ) : (
        <GridLayout>
          <InputForm
            inputId="ogUrlInput"
            labelValue="Og:Url"
            placeholder="https://some-page-url.com/"
            onChange={handleOptInputsChange}
          />
          <InputForm
            inputId="robotsInput"
            labelValue="Robots"
            placeholder="noindex, nofollow"
            onChange={handleOptInputsChange}
          />
          <InputForm
            inputId="ratingInput"
            labelValue="Rating"
            placeholder="adult"
            onChange={handleOptInputsChange}
          />
          <InputForm
            inputId="authorInput"
            labelValue="Author"
            placeholder="Author name"
            onChange={handleOptInputsChange}
          />
          <InputForm
            inputId="copyrightInput"
            labelValue="Copyright"
            placeholder="Copyright owner"
            onChange={handleOptInputsChange}
          />
        </GridLayout>
      )}
    </>
  )
}
