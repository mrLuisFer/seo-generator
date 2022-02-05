import { Box, Fade } from '@chakra-ui/react'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import { gray } from 'utils/chakraColors'
import { useDarkMode } from 'hooks/useDarkMode'

export default function ResourcesSection() {
  const { showTitles } = useSidebarTitlesCtx()
  const { isDarkMode } = useDarkMode()

  const commonRadiusAndPadding: string = '1.5rem'

  return (
    <Fade in={!showTitles}>
      {!showTitles && (
        <Box
          bg={isDarkMode ? gray.$600 : gray.$400}
          color={isDarkMode ? gray.$100 : gray.$800}
          borderRadius={commonRadiusAndPadding}
          p={commonRadiusAndPadding}
        >
          <p>some</p>
        </Box>
      )}
    </Fade>
  )
}