import { Button } from '@chakra-ui/react'
import { blue } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'

export default function HeaderBtn({ children, ...props }) {
	return (
		<Button
			border="2px"
			p="4px"
			borderRadius="10px"
			borderColor="transparent"
			_hover={{ borderColor: blue.$400 }}
			transition={transitionProperty('color')}
			display="inline-block"
			{...props}
		>
			{children}
		</Button>
	)
}
