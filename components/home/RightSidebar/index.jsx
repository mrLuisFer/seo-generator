import { Box } from '@chakra-ui/react'
import { gray } from 'lib/chakraColors'
import TitleTag from './MetaTags/TitleTag'

export default function RightSidebar({
  optionalInputValues = { optionalInputValues },
  requiredInputValues = { requiredInputValues },
  setOptionalInputValues = { setOptionalInputValues },
  setRequiredInputValues = { setRequiredInputValues },
}) {
  return (
    <Box
      as="aside"
      bg={gray.$700}
      w="100%"
      h="100%"
      gridColumn="span 2"
      borderRadius="15px"
      p="1.5rem"
      color={gray.$100}
      boxShadow="md"
    >
      <TitleTag tagValue={requiredInputValues.titleInput} />
    </Box>
  )
}
