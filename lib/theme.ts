import { extendTheme } from '@chakra-ui/react'

const themeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ themeConfig })

export default theme
