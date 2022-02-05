import { useState } from 'react'
import { MdPerson } from 'react-icons/md'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Collapse, Box } from '@chakra-ui/react'
import HeaderBtn from 'lib/CommonBtn'

export default function Contributors() {
  const [showLinkIcon, setShowLinkIcon] = useState(false)

  return (
    <HeaderBtn
      as="a"
      href="https://mrluisfer-linktry.netlify.app/"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setShowLinkIcon(true)}
      onMouseLeave={() => setShowLinkIcon(false)}
      width="auto"
      padding="8px"
      display="flex"
      alignItems="center"
      position="relative"
    >
      <MdPerson size="1.5rem" />
      <Collapse in={showLinkIcon} animateOpacity>
        {showLinkIcon && (
          <Box marginLeft="0.5rem">
            <FaExternalLinkAlt size="0.8rem" />
          </Box>
        )}
      </Collapse>
    </HeaderBtn>
  )
}
