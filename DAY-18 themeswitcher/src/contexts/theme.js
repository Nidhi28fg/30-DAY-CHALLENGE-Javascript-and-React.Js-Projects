import { createContext, useContext } from "react";
// createcontext

export const ThemeContext = createContext({
    themeMode: "light", //In the above code, you can take a variable and function in the inside value. This is useful when you want to share data between components.
    darkTheme: () => {},
    lightTheme: () => {},
})
//This code creates a context object that is used to share data between components. 
// The context object is created using the createContext method. 

//The ThemeProvider component is used to provide the context object to the components that need it.


// createProvider
export const ThemeProvider = ThemeContext.Provider
//The context object is then provided to the ThemeProvider component. you can provide the provider here directly


// useContext hook
export default function useTheme(){
    return useContext(ThemeContext)
}
j
