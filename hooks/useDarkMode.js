import { useColorMode } from '@chakra-ui/react'

export const useDarkMode = () => {
	const { colorMode } = useColorMode()
	const isDarkMode = colorMode !== 'light'

	return {
		isDarkMode,
	}
}
