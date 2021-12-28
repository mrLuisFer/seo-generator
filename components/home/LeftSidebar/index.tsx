import { Box } from '@chakra-ui/react'
import MetaForm from './MetaForm'

export default function LeftSidebar({
  optionalInputValues,
  requiredInputValues,
  setOptionalInputValues,
  setRequiredInputValues,
}) {
  return (
    <Box as="section" gridColumn="span 3">
      <MetaForm
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
    </Box>
  )
}
