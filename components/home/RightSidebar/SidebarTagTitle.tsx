import { Heading } from '@chakra-ui/react'
import { useSidebarTitlesCtx } from 'context/SidebarTitlesCtx'
import { white } from 'utils/chakraColors'

export default function SidebarTagTitle({ children }: { children: any }) {
  const { showTitles } = useSidebarTitlesCtx()
  return (
    <>
      {showTitles && (
        <Heading as="h3" size="sm" mb="0.2rem" mt="1rem" letterSpacing="0.8px" color={white}>
          {children}
        </Heading>
      )}
    </>
  )
}
