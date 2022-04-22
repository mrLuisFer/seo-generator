import { Box, Fade, Heading, VStack } from '@chakra-ui/react'
import { gray } from 'utils/chakraColors'
import { useDarkMode } from 'hooks/useDarkMode'
import resources, { IResource } from './resources'
import ResourceItem from "./ResourceItem"

export default function ResourcesSection() {
  const { isDarkMode } = useDarkMode()

  console.log(resources)

  return (
    <Fade in={true}>
      <Box
        bg={isDarkMode ? gray.$600 : gray.$400}
        color={isDarkMode ? gray.$100 : gray.$800}
        borderRadius='1.5rem'
        p='1.5rem'
      >
        <Heading as="h1" size="1.2rem">
          Sources
        </Heading>
        <VStack alignItems="flex-start">
          {resources.map((resource: IResource) => (
            <ResourceItem resource={resource} />
          ))}
        </VStack>
      </Box>
    </Fade>
  )
}
