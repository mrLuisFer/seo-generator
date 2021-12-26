import { Box } from '@chakra-ui/react'
import { gray, white } from 'lib/chakraColors'

function DropDownItem({ children }) {
  return <Box>{children}</Box>
}

export default function DropDownMenu() {
  return (
    <Box
      position="absolute"
      bg={gray.$700}
      borderRadius="5px"
      color={white}
      marginTop="0.5rem"
      p="2rem 0"
      zIndex="10"
    >
      <DropDownItem>item</DropDownItem>
    </Box>
  )
}
