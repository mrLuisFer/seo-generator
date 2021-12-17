import { useState } from 'react'
import { Box } from '@chakra-ui/react'
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
    <Box>
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
    </Box>
  )
}
