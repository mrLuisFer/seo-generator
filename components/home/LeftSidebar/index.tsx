import { Box } from '@chakra-ui/react'
import MetaForm from './MetaForm'

export default function LeftSidebar({
  optionalInputValues,
  requiredInputValues,
  setOptionalInputValues,
  setRequiredInputValues,
}) {
  return (
    <Box gridColumn="span 3" as="aside">
      <MetaForm
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
    </Box>
  )
}
