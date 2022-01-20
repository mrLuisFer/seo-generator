import { Box } from '@chakra-ui/react'
import { gray } from 'lib/chakraColors'
import MetaTags from './MetaTags'
import HeaderSidebar from './HeaderSidebar'
import type { IOptionalInputs, IRequiredInputs } from '../homeTypes'
import SidebarTitlesCtxProvider from 'context/SidebarTitlesCtx'

interface IProps {
  optionalInputValues: IOptionalInputs
  requiredInputValues: IRequiredInputs
}

export default function RightSidebar({ optionalInputValues, requiredInputValues }: IProps) {
  return (
    <Box
      as="section"
      bg={gray.$700}
      w="100%"
      h="100%"
      gridColumn="span 2"
      borderRadius="15px"
      p="1.5rem"
      boxShadow="md"
    >
      <SidebarTitlesCtxProvider>
        <HeaderSidebar />
        <MetaTags
          requiredInputValues={requiredInputValues}
          optionalInputValues={optionalInputValues}
        />
      </SidebarTitlesCtxProvider>
    </Box>
  )
}
