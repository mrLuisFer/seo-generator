import { useColorMode } from '@chakra-ui/react'

export const useDarkMode = (): { isDarkMode: boolean } => {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode !== 'light'

  return {
    isDarkMode,
  }
}
