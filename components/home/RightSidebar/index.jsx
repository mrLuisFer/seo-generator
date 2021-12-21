import { Box } from '@chakra-ui/react'
import PreviewContainer from './PreviewContainer'
import { gray } from 'lib/chakraColors'

export default function RightSidebar() {
	return (
		<Box
			as="aside"
			bg={gray.gray700}
			w="100%"
			h="100%"
			gridColumn="span 2"
			borderRadius="15px"
			p="1.5rem"
		>
			<PreviewContainer />
		</Box>
	)
}
