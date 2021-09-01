import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import dataBase from '../utilites/dataBase';


const LoginPage = () => {
    const {setUser} = useContext(UserContext);
    const [person, setPerson] = useState('');
    const [password, setPassword] = useState('')

const handlePerson = (e) => {
setPerson(e.target.value);
}

const handlePassword = (e) => {
  setPassword(e.target.value);
}

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if(person != '' ){
//   const user = {
//     name: e.target['person'].value,
//     password: e.target['password'].value
//   }
//   setUser(user)
//   }

// }

const handleSubmit = (e) => {
  e.preventDefault();
if (person !== '') {
  dataBase.forEach(x => {
    if (x.name === person && x.password === password) {
      setUser(dataBase);
    }
  })
}
}

  return (
    <div>
        <h1>Ingrese a su cuenta</h1>
        <form  onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingrese nombre de usuario' onChange={handlePerson} id='person' value={person}/>
          <input type="password" placeholder='ingrese password' onChange={handlePassword} id='password' value={password} />
          <button type='submit' >Login</button>
          <p>No estás registrado?</p>
          <Link to='/register'>register</Link>
        </form>
    </div>
  )
}

export default LoginPage
