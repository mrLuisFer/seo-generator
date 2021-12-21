import { Box, Text } from '@chakra-ui/react'
import { BsFillPeopleFill } from 'react-icons/bs'
import ClickPopup from '../ClickPopup'
import { blue } from 'lib/chakraColors'

export default function Contributors() {
	return (
		<Box
			border="2px"
			p="4px"
			borderRadius="10px"
			borderColor="transparent"
			_hover={{ borderColor: blue.$400 }}
		>
			<ClickPopup text="Made by mrLuisFer" width="8rem">
				<Text cursor="pointer">
					<BsFillPeopleFill size="1.6rem" />
				</Text>
			</ClickPopup>
		</Box>
	)
}
