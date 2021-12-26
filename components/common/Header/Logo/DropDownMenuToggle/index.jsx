import { useState } from 'react'
import { Text, Box } from '@chakra-ui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { gray, black } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'
import HoverPopup from 'components/common/HoverPopup'
import DropDownMenu from './DropDownMenu'

export default function DropDownMenuToggle() {
	const [isShowMenu, setIsShowMenu] = useState(false)

	const handleShowMenu = () => setIsShowMenu((prevState) => !prevState)

	return (
		<>
			<Box
				_hover={{ background: gray.$200, color: black }}
				bg="transparent"
				border="transparent"
				cursor="pointer"
				p={0}
				h="auto"
				w="auto"
				transition={transitionProperty('all')}
				borderRadius="5px"
				onClick={handleShowMenu}
				userSelect="none"
				title="Click to show social media"
			>
				<Text
					fontSize="1.6rem"
					transform={isShowMenu ? 'rotate(-180deg)' : 'rotate(0deg)'}
					transition={transitionProperty('all')}
				>
					<MdOutlineKeyboardArrowDown />
				</Text>
			</Box>
			{isShowMenu && <DropDownMenu />}
		</>
	)
}
