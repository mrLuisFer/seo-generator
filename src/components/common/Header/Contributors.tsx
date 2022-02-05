import HeaderBtn from 'lib/CommonBtn'
import { MdPerson } from 'react-icons/md'

export default function Contributors() {
  return (
    <HeaderBtn as="a" href="https://mrluisfer-linktry.netlify.app/" target="_blank" rel="noreferrer">
      <MdPerson size="1.5rem" />
    </HeaderBtn>
  )
}
