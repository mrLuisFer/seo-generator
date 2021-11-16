import { VStack } from '@chakra-ui/layout'

export default function GridLayout({ children }) {
  return (
    <VStack
      as="form"
      align="start"
      spacing="2rem"
      display={{ base: 'flex', lg: 'grid' }}
      gridTemplateColumns={{ lg: 'repeat(auto-fill, minmax(300px, 1fr))' }}
      gridAutoFlow={{ lg: 'dense' }}
      gridTemplateRows={{ lg: 'mansory' }}
      gridGap={{ lg: '2rem' }}
    >
      {children}
    </VStack>
  )
}
