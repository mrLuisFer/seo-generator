import { MdTitle } from 'react-icons/md'
import styles from './styles.module.css'

export default function HideTitlesIcon({ showMiddleline }: { showMiddleline: boolean }) {
  return (
    <div className={showMiddleline ? styles.hideTitlesIconContainer : ''}>
      <MdTitle display="inline-block" size="1.6rem" />
    </div>
  )
}
