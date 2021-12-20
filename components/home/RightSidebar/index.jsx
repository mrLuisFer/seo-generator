import { Box } from '@chakra-ui/react'
import PreviewContainer from './PreviewContainer'
import { gray } from 'lib/chakraColors'

export default function RightSidebar() {
	return (
		<Box gridColumnStart="4" bg={gray.gray700} w="100%" h="100%">
			<PreviewContainer />
		</Box>
	)
}
