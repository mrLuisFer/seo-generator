import { VStack } from '@chakra-ui/react'
import RequiredInputs from './RequiredInputs'
import OptionalInputs from './OptionalInputs'
import type { IAllInputTypes } from '../../homeTypes'

export default function MetaForm({
  requiredInputValues,
  setRequiredInputValues,
  optionalInputValues,
  setOptionalInputValues,
}: IAllInputTypes) {
  return (
    <VStack as="form" spacing="1.2rem">
      <RequiredInputs
        requiredInputValues={requiredInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
      <OptionalInputs
        optionalInputValues={optionalInputValues}
        setOptionalInputValues={setOptionalInputValues}
      />
    </VStack>
  )
}
