import { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/spinner'
import InputForm from './InputForm'
import GridLayout from './GridLayout'

export default function OptionalMetatagsInputs() {
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false)
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showSpinner ? (
        <Spinner size="lg" color="cyan" />
      ) : (
        <GridLayout>
          <InputForm
            inputId="ogUrlInput"
            labelValue="Og:Url"
            placeholder="https://some-page-url.com/"
          />
          <InputForm inputId="robotsInput" labelValue="Robots" placeholder="noindex, nofollow" />
          <InputForm inputId="ratingInput" labelValue="Rating" placeholder="adult" />
          <InputForm inputId="authorInput" labelValue="Author" placeholder="Author name" />
          <InputForm
            inputId="copyrightInput"
            labelValue="Copyright"
            placeholder="Copyright owner"
          />
        </GridLayout>
      )}
    </>
  )
}
