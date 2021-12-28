import { extendTheme } from '@chakra-ui/react'

type ThemeConfigType = {
  initialColorMode: string
  useSystemColorMode: boolean
}
const themeConfig: ThemeConfigType = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ themeConfig })
export default theme
