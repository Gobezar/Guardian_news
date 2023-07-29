import { useEffect, useRef } from 'react'

export const useDebouncedEffect = (
  effect: () => void,
  deps: React.DependencyList,
  delay: number
) => {
  const isFirstMount = useRef(true)

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }

    const handler = setTimeout(effect, delay)
    return () => clearTimeout(handler)
  }, deps)
}
