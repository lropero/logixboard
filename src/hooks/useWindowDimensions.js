import { debounce } from 'lodash'
import { useEffect, useState } from 'react'

const getWindowDimensions = () => ({ height: window.innerHeight, width: window.innerWidth })

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    const handleResize = debounce(() => setWindowDimensions(getWindowDimensions()), 100)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
