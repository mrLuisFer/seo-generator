import { Text, Grid, Link, useColorModeValue } from '@chakra-ui/react'
import { transitionProperty } from 'utils/transitionProperty'

interface DropDownItemProps {
  children: any
  text: string
  hoverIconColor?: string
  url: string
  [props: string]: any
}

export default function DropDownItem({ children, text, hoverIconColor = '', url, ...props }: DropDownItemProps) {

  return (
    <Grid
      cursor="default"
      fontWeight="semibold"
      transition={transitionProperty('background')}
      userSelect="none"
      color={useColorModeValue("black", "white")}
      w="150px"
      alignItems="center"
      className="itemContainer"
      boder="1px solid"
      borderColor="transparent"
      {...props}
      _hover={{
        background: "fill.100",
        borderColor: "fill.300"
      }}
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
