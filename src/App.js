
import Signup from './components/Signup';
import './App.css';
import Login from './components/Login';
import {Route  , Switch, Redirect} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/SignUp" component={Signup} />
       <Route path="/Login" component={Login} />
       <Redirect from="/" to="/Signup"/>
     </Switch>
    </div>
  );
}

export default App;
