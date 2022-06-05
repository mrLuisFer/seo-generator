import { Box, ChakraProps } from '@chakra-ui/react'
import { useDarkMode } from 'hooks/useDarkMode'
import { transitionProperty } from 'utils/transitionProperty'
import { gray, white } from 'utils/chakraColors'

type HeaderBtnProps = {
  children: any
  [props: string]: ChakraProps | any
}

export default function HeaderBtn({ children, ...props }: HeaderBtnProps) {
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
