import { Flex } from '@chakra-ui/react'
import { useColorschemeCtx } from 'context/HighlightColorschemeCtx'
import { AiOutlineBgColors } from 'react-icons/ai'
import Select from 'react-select'
import themes from './themes'
import { useDarkMode } from 'hooks/useDarkMode'

export default function SelectColorscheme() {
  const { setColorscheme } = useColorschemeCtx()
  const { isDarkMode } = useDarkMode()

  const bg = !isDarkMode ? '#F7FAFC' : '#1A202C'
  const txtColor = isDarkMode ? '#ffffff' : '#000000'
  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: '#000',
    }),
    control: (provided) => ({
      ...provided,
      background: bg,
      color: txtColor,
    }),
    container: (provided) => ({
      ...provided,
      background: bg,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: txtColor
    })
  }

  return (
    <Flex alignItems="center" gridGap="1rem">
      <label htmlFor="select-theme">
        <AiOutlineBgColors size="1.5rem" />
      </label>
      <Select
        name="select-theme"
        styles={customStyles}
        id="select-theme"
        options={themes}
        onChange={(e) => setColorscheme(e)}
      />
    </Flex>
  )
}
