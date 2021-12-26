import { Button } from '@chakra-ui/react'
import { blue } from 'lib/chakraColors'
import { transitionProperty } from 'lib/transitionProperty'

export default function HeaderBtn({ children, hoverProps, ...props }) {
  return (
    <Button
      border="2px"
      p="4px"
      borderRadius="10px"
      borderColor="transparent"
      _hover={{ borderColor: blue.$400, ...hoverProps }}
      transition={transitionProperty('color')}
      display="inline-block"
      boxShadow="xs"
      {...props}
    >
      {children}
    </Button>
  )
}
