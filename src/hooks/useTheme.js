import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

const useTheme = () => {
  const theme = useContext(ThemeContext)
  if (!theme) {
    throw new Error('useTheme: !theme, forgot ThemeProvider?')
  }
  return theme
}

export default useTheme
