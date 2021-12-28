import { Button } from '@chakra-ui/react'
import { CgMoreR } from 'react-icons/cg'
import { VscCollapseAll } from 'react-icons/vsc'

export default function ShowOptInputsButton({ setShowOptionalInputs, showOptionalInputs }) {
  return (
    <Button
      onClick={() => setShowOptionalInputs((prevShowOptionalInputs) => !prevShowOptionalInputs)}
      colorScheme={showOptionalInputs ? 'blue' : 'teal'}
      variant="ghost"
      leftIcon={showOptionalInputs ? <VscCollapseAll /> : <CgMoreR />}
      margin="2rem 0"
    >
      {showOptionalInputs ? 'Hide optional inputs' : 'Show optional inputs'}
    </Button>
  )
}
