import { nord, dracula, materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
  {
    value: materialOceanic,
    label: 'Material Dark'
  }
]

export default options
