import { Flex } from '@chakra-ui/react'
import { useColorschemeCtx } from 'context/HighlightColorschemeCtx'
import { AiOutlineBgColors } from 'react-icons/ai'
import Select from 'react-select'
import themes from './themes'

export default function SelectColorscheme() {
  const { setColorscheme } = useColorschemeCtx()

  const handleSelect = (e: any) => {
    setColorscheme(e)
  }

  return (
    <Flex alignItems="center" gridGap="1rem">
      <AiOutlineBgColors size="1.5rem" />
      <Select options={themes} onChange={(e) => handleSelect(e)} />
    </Flex>
  )
}
