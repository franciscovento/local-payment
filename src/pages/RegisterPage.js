import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import dataBase from '../utilites/dataBase';

const RegisterPage = () => {

    const {user, setUser} = useContext(UserContext);
    const [person, setPerson] = useState('');
    const [password, setPassword] = useState('')

    const handlePerson = (e) => {
      setPerson(e.target.value);
      }
      
      const handlePassword = (e) => {
        setPassword(e.target.value);
      }

const handleSubmit = (e) => {
  e.preventDefault();
 if (person !== '' && password !== '') {
  const newUser = {
    name: person,
    password: password
  }
  dataBase.push(newUser);
  setUser(dataBase);
 }
}

  return (
    <div>
      <h1>Soy Register Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <form onSubmit={handleSubmit} >
          <input type="text" placeholder='Ingrese nombre de usuario'  onChange={handlePerson} id='person' vale={person} />
          <input type="password" placeholder='ingrese password' onChange={handlePassword}  id='password' vale={password}  />
          <button type='submit'>Registrar</button>
        </form>
    </div>
  )
}

export default RegisterPage
