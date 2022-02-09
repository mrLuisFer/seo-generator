import { Text, Grid } from '@chakra-ui/react'
import { useDarkMode } from 'hooks/useDarkMode'
import { transitionProperty } from 'utils/transitionProperty'
import { gray, white, black } from 'utils/chakraColors'

interface DropDownItemProps {
  children: any
  text: string
  hoverIconColor?: string
  [props: string]: any
}

export default function DropDownItem({ children, text, hoverIconColor = '', ...props }: DropDownItemProps) {
  const { isDarkMode } = useDarkMode()

  return (
    <Grid
      _hover={{ background: isDarkMode ? gray.$600 : gray.$300 }}
      cursor="pointer"
      fontWeight="semibold"
      p="0.5rem 1.5rem"
      transition={transitionProperty('background')}
      userSelect="none"
      color={isDarkMode ? white : black}
      spacing="10px"
      w="100%"
      alignItems="center"
      gridTemplateColumns="30px 1fr"
      className="itemContainer"
      {...props}
    >
      <Text
        sx={{
          '.itemContainer:hover &': {
            color: hoverIconColor,
          },
        }}
      >
        {children}
      </Text>
      <Text m={0}>{text}</Text>
    </Grid>
  )
}
