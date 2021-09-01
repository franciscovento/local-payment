import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const FormPage = () => {

  const {user, setUser} = useContext(UserContext);
 
  const handleLogout = () => {

    setUser(null);
  }

  return (
    <div>
      <h1>Soy Form Page</h1>
      <div>{user.name}</div>
      <div>{user.password}</div>
      <button onClick = {handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default FormPage
