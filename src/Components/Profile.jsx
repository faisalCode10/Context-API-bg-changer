import React,{useContext} from 'react'
import UserContext from '../Context/userContext'

const Profile = () => {
    const {User} = useContext(UserContext)
    if(!User) return <div>Please Login</div>

    return <div>Welcome {User.userName}</div>
}

export default Profile