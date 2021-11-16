import { VStack } from '@chakra-ui/layout'

export default function GridLayout({ children, ...props }) {
  return (
    <VStack
      as="form"
      align="start"
      spacing={{ base: '2rem', lg: '0rem' }}
      display={{ base: 'flex', lg: 'grid' }}
      gridTemplateColumns={{ lg: 'repeat(auto-fill, minmax(300px, 1fr))' }}
      gridAutoFlow={{ lg: 'dense' }}
      gridTemplateRows={{ lg: 'masonry' }}
      gridGap={{ lg: '2rem' }}
      alignItems={{ lg: 'start' }}
      {...props}
    >
      {children}
    </VStack>
  )
}
