import { useColorModeValue } from '@chakra-ui/react'

export const useCommonHoverBgColor = (): string => {
  const commonBgColor = useColorModeValue('gray.800', '')
  return commonBgColor
}
