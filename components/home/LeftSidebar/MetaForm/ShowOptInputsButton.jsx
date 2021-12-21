import { Button } from '@chakra-ui/react'
import { blue, teal } from 'lib/chakraColors'
import { CgMoreR } from 'react-icons/cg'
import { VscCollapseAll } from 'react-icons/vsc'

export default function ShowOptInputsButton({ setShowOptionalInputs, showOptionalInputs }) {
  return (
    <Button
      onClick={() => setShowOptionalInputs((prevShowOptionalInputs) => !prevShowOptionalInputs)}
      colorScheme={showOptionalInputs ? blue.$100 : teal.$100}
      variant={showOptionalInputs ? 'outline' : 'ghost'}
      leftIcon={showOptionalInputs ? <VscCollapseAll /> : <CgMoreR />}
      margin="2rem 0"
    >
      {showOptionalInputs ? 'Hide optional inputs' : 'Show optional inputs'}
    </Button>
  )
}
