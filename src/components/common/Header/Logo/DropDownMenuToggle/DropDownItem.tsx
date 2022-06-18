import { Text, Grid, Link } from '@chakra-ui/react'
import { useDarkMode } from 'hooks/useDarkMode'
import { transitionProperty } from 'utils/transitionProperty'
import { gray, white, black } from 'utils/chakraColors'

interface DropDownItemProps {
  children: any
  text: string
  hoverIconColor?: string
  url: string
  [props: string]: any
}

export default function DropDownItem({ children, text, hoverIconColor = '', url, ...props }: DropDownItemProps) {
  const { isDarkMode } = useDarkMode()

  return (
    <Grid
      _hover={{ background: isDarkMode ? gray.$600 : gray.$300 }}
      cursor="pointer"
      fontWeight="semibold"
      transition={transitionProperty('background')}
      userSelect="none"
      color={isDarkMode ? white : black}
      w="150px"
      alignItems="center"
      className="itemContainer"
      {...props}
    >
      <Link
        p="0.5rem 1.5rem"
        href={url}
        isExternal
        display="flex"
        alignItems="center"
        gridGap="1rem"
        justifyContent="flex-start"
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
      </Link>
    </Grid>
  )
}
