
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    //This will remove both light and dark modes.
    document.querySelector('html').classList.add(themeMode)
    // this will add themeMode.
  }, [themeMode])

  //useEffect is a React hook that runs after the render, 
  // and then every time the dependency array changes. 
  // This is a useful hook for managing side effects in functional components.

  return (
// All provider functions are defined above. 
    // Now you have to wrap all the code in a ThemeProvider so that it can directly access the value of the themeMode.
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
