import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    // The user variable is used to retrieve data from the UserContext. 
    // If the user variable is null, then the component displays a message asking the user to log in. 
    // Otherwise, the component displays a message welcoming the user by name.
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
