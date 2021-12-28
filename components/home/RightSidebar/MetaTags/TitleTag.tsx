import { Box } from '@chakra-ui/react'

interface TitleTagProps {
  tagValue: string
}
export default function TitleTag({ tagValue }: TitleTagProps) {
  return <Box>{`<title>${tagValue}<title>`}</Box>
}
