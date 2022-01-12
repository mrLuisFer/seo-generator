import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { useSidebarCtx } from 'hooks/useSidebarCtx'
import ShowSidebarBtn from './RightSidebar/HidesidebarBtn/ShowSidebarBtn'
import type { IOptionalInputs, IRequiredInputs } from './homeTypes'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const requiredInputsInitialState: IRequiredInputs = {
  descriptionTextarea: '',
  imgInput: '',
  keywordsInput: '',
  ogTypeInput: '',
  titleInput: '',
}

const optionalInputsInitialState: IOptionalInputs = {
  author: '',
  copyright: '',
  ogUrl: '',
  rating: '',
  robots: '',
}

export default function Home() {
  const [requiredInputValues, setRequiredInputValues] = useState<IRequiredInputs>(
    requiredInputsInitialState
  )
  const [optionalInputValues, setOptionalInputValues] = useState<IOptionalInputs>(
    optionalInputsInitialState
  )

  const { hideSidebar } = useSidebarCtx()
  const gridStyle = hideSidebar ? '1fr 1fr 1fr 50px' : '1fr 1fr 1fr 1fr 1fr'

  return (
    <Box display="grid" gridTemplateColumns={gridStyle} gridGap="2rem">
      <LeftSidebar
        optionalInputValues={optionalInputValues}
        requiredInputValues={requiredInputValues}
        setOptionalInputValues={setOptionalInputValues}
        setRequiredInputValues={setRequiredInputValues}
      />
      {!hideSidebar ? (
        <RightSidebar
          optionalInputValues={optionalInputValues}
          requiredInputValues={requiredInputValues}
          setOptionalInputValues={setOptionalInputValues}
          setRequiredInputValues={setRequiredInputValues}
        />
      ) : (
        <ShowSidebarBtn />
      )}
    </Box>
  )
}
