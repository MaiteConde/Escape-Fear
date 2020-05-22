import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Login from './containers/user/Login/Login';
import Register from './containers/user/register/Register';
import Login from './containers/user/login/Login';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    
      <Switch>
      {/* <Route exact path='/' component={Home} /> */}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        
        

        {/* <Route exact path='*' component={NotFound} /> */}
       
      </Switch>
    </BrowserRouter>

    {/* <div className="title">
     <h1>ADOPT<br></br> DONT SHOP</h1> 
     <Button>KNOW MORE</Button>
    </div> */}
  </div>
  );
}

export default App;
