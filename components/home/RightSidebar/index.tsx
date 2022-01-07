import { Box } from '@chakra-ui/react'
import { gray } from 'lib/chakraColors'
import type { IRightSideProps } from '../homeTypes'
import TitleTag from './MetaTags/TitleTag'

export default function RightSidebar({
  optionalInputValues,
  requiredInputValues,
  setOptionalInputValues,
  setRequiredInputValues,
}: IRightSideProps) {
  console.log(
    optionalInputValues,
    requiredInputValues,
    setOptionalInputValues,
    setRequiredInputValues
  )

  return (
    <Box
      as="section"
      bg={gray.$700}
      w="100%"
      h="100%"
      gridColumn="span 2"
      borderRadius="15px"
      p="1.5rem"
      // color={gray.$100}
      boxShadow="md"
    >
      <TitleTag tagValue={requiredInputValues.titleInput} />
    </Box>
  )
}
