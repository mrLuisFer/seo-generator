import { useEffect, useState } from 'react'

export const useCreateUUID = () => {
  const [uuid, setUuid] = useState<string>('')

  const createUUID = (): void => {
    if (window === undefined || typeof window === 'undefined') return

    const windowUUID: string = window.crypto.randomUUID()
    setUuid(windowUUID)
  }

  useEffect(() => {
    createUUID()
  }, [])

  return { uuid, createUUID }
}
