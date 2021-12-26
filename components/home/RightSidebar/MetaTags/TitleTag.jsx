import { Box } from '@chakra-ui/react'

export default function TitleTag({ tagValue }) {
  return <Box>{`<title>${tagValue}<title>`}</Box>
}
