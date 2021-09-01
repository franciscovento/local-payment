import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, user, ...rest}) => {
  return <Route {...rest}>
      {user? <Component /> : <Redirect to='/'/>}
       </Route>
}

export default PrivateRoute
