import { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

export default function ClickOutside({ stateFunc, children }) {
  const ref = useRef(null)
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      stateFunc(false)
    }
    return
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  })
  return (
    <Box ref={ref} position="relative">
      {children}
    </Box>
  )
}
