import { Text } from '@chakra-ui/react'
import { BsFillPeopleFill } from 'react-icons/bs'
import ClickPopup from '../ClickPopup'
import HeaderBtn from './HeaderBtn'

export default function Contributors() {
  return (
    <HeaderBtn>
      <ClickPopup text="Made by mrLuisFer" width="8rem">
        <Text cursor="pointer">
          <BsFillPeopleFill size="1.6rem" />
        </Text>
      </ClickPopup>
    </HeaderBtn>
  )
}
