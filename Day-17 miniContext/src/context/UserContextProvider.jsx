import React from "react";
import UserContext from "./UserContext";
// The UserContextProvider takes the children as an argument and returns the value as it is. 
// The value is then passed to the context provider, which then provides the value to the children.

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
