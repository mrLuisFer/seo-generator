import { nord, dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface IOptions {
  value: any
  label: string
}

const options: Array<IOptions> = [
  {
    value: nord,
    label: 'Nord',
  },
  {
    value: dracula,
    label: 'Dracula',
  },
]

export default options
