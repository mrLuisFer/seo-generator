import { Box } from '@chakra-ui/react'
import { useDarkMode } from 'hooks/useDarkMode'
import { transitionProperty } from 'lib/transitionProperty'
import { gray, white } from 'lib/chakraColors'

export default function HeaderBtn({ children, ...props }) {
  const { isDarkMode } = useDarkMode()

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      opacity="0.5"
      _hover={{ opacity: 1 }}
      transition={transitionProperty()}
      color={isDarkMode ? white : gray.$200}
      {...props}
    >
      {children}
    </Box>
  )
}
