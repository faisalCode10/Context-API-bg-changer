import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

const App = () => {
  return (
    <div>
    <UserContextProvider>
      <h1>Chai aur react </h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
  )
}

export default App