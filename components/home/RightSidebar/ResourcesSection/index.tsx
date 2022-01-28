import { Box, Fade } from '@chakra-ui/react'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import { gray } from 'utils/chakraColors'

export default function ResourcesSection() {
  const { showTitles } = useSidebarTitlesCtx()

  const commonRadiusAndPadding: string = '1.5rem'

  return (
    <>
      <Fade in={!showTitles}>
        {!showTitles && (
          <Box bg={gray.$600} borderRadius={commonRadiusAndPadding} p={commonRadiusAndPadding}>
            <p>some</p>
          </Box>
        )}
      </Fade>
    </>
  )
}
