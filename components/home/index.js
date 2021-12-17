import { Box } from '@chakra-ui/react'
import LeftSidebar from "./LeftSidebar"
import RightSidebar from './RightSidebar'

export default function Home() {
  return (
    <Box>
      <LeftSidebar />
      <RightSidebar />
    </Box>
  )
}
