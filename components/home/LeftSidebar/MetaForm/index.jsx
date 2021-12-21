import { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import OptionalInputs from './OptionalInputs'
import ShowOptInputsButton from './ShowOptInputsButton'
import RequiredInputs from './RequiredInputs'

export default function MetaForm({
  requiredInputValues,
  setRequiredInputValues,
  optionalInputValues,
  setOptionalInputValues,
}) {
  const [showOptionalInputs, setShowOptionalInputs] = useState(false)

  return (
    <VStack as="form" spacing="1.2rem">
      <RequiredInputs
        requiredInputValues={requiredInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
      <ShowOptInputsButton
        setShowOptionalInputs={setShowOptionalInputs}
        showOptionalInputs={showOptionalInputs}
      />
      {showOptionalInputs && (
        <OptionalInputs
          optionalInputValues={optionalInputValues}
          setOptionalInputValues={setOptionalInputValues}
        />
      )}
    </VStack>
  )
}
