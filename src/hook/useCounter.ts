import { useState } from 'react'

export const useCounter = (): [number, () => void] => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount((prevState) => prevState + 1)
  }

  return [count, increment]
}
