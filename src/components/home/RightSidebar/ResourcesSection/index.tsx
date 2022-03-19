import { Box, Fade, Heading, VStack } from '@chakra-ui/react'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import { gray } from 'utils/chakraColors'
import { useDarkMode } from 'hooks/useDarkMode'
import resources from './resources'

export default function ResourcesSection() {
  const { showTitles } = useSidebarTitlesCtx()
  const { isDarkMode } = useDarkMode()

  const commonRadiusAndPadding: string = '1.5rem'
  console.log(resources)

  return (
    <Fade in={!showTitles}>
      {!showTitles && (
        <Box
          bg={isDarkMode ? gray.$600 : gray.$400}
          color={isDarkMode ? gray.$100 : gray.$800}
          borderRadius={commonRadiusAndPadding}
          p={commonRadiusAndPadding}
        >
          <Heading as="h3" size="1.2rem">
            Sources
          </Heading>
          <VStack alignItems="flex-start">
            {resources.map((resource) => (
              <Box
                key={resource.title}
                as="a"
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                bg={isDarkMode ? gray.$600 : gray.$400}
                color={isDarkMode ? gray.$100 : gray.$800}
                borderRadius={commonRadiusAndPadding}
              >
                {resource.title}
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </Fade>
  )
}
