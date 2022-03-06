import { useRef, MutableRefObject } from 'react'
import { Box, HStack, Button, VStack } from '@chakra-ui/react'
import { FaImages } from 'react-icons/fa'
import { BsFileImage } from 'react-icons/bs'
import InputForm from '../formComponents/InputForm'

export default function OgImg({ setOgImg, ogImg, setOgImgWidth, setOgImgHeight, ogImgWidth, ogImgHeight }) {
	const ogWidthRef = useRef<HTMLInputElement>(null)
	const ogHeightRef = useRef<HTMLInputElement>(null)

	return (
		<>
			<InputForm
				inputId="ogImg"
				setState={setOgImg}
				value={ogImg}
				labelValue="OgImage"
				placeholder="https://your_domain/assets/thumbnail.png"
				infoTxt="The ogimg of the page, this is the most important part of the SEO"
			/>
			<VStack as="section" gridGap="15px" alignItems="flex-start" width="100%">
				<CommonImgStack title={`ogImg Width - ${ogImgWidth}px`} btnIcon={<FaImages />} inputRef={ogWidthRef}>
					<InputForm width="200px" inputId="ogImgWidth" setState={setOgImgWidth} value={ogImgWidth} placeholder="" ref={ogWidthRef} />
				</CommonImgStack>
				<CommonImgStack title={`ogImg Height - ${ogImgHeight}px`} btnIcon={<BsFileImage />} inputRef={ogHeightRef}>
					<InputForm width="200px" inputId="ogImgHeight" setState={setOgImgHeight} value={ogImgHeight} placeholder="" ref={ogHeightRef} />
				</CommonImgStack>
			</VStack>
		</>
	)
}


interface CommonImgStackProps {
	title: string
	btnIcon: JSX.Element
	children: any
	inputRef: MutableRefObject<HTMLInputElement>
}
function CommonImgStack({ title, btnIcon, children, inputRef }: CommonImgStackProps) {
	const handleWidthFocus = (ref) => {
		if (ref !== undefined) {
			ref.current.focus()
		}
	}

	return (
		<HStack>
			<Button p="0.5rem" title={title} onClick={() => handleWidthFocus(inputRef)}>
				{btnIcon}
			</Button>
			{children}
		</HStack>
	)
}