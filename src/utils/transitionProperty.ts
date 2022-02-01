export const transitionProperty = (property: string = '', transitionTime: string | number = '0.2s'): string => {
  const time: string = transitionTime.toString()

  return `${property} ${time} ease`
}
