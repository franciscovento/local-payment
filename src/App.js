import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import FormPage from './pages/FormPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserContext from './context/UserContext';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';




function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
    <Router>     
        <Switch>
            <Route exact path='/'>
                {user? <Redirect to='/form'/> : <LoginPage /> }
            </Route>
            <Route path= '/register'>
              {user? <Redirect to='/form'/> : <RegisterPage />}
            </Route>
            <PrivateRoute path='/form' user={user} component={FormPage} />
            <Route path='*'>
              <Redirect to='/' />
            </Route>
        </Switch>
    </Router>
    </UserContext.Provider> 
      
  
   
   
  );
}

export default App;
