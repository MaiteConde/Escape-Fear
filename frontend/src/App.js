import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './containers/user/register/Register';
import Login from './containers/user/login/Login';
import Header from './components/Header'
import Home from './containers/home/Home'
import ReserSteps from './containers/room/Steps';
import Rooms  from './containers/room/Rooms';
import Room from './containers/room/Room';
import { NotFound } from './components/NotFound';
import Profile from './containers/user/profile/Profile';
import Edit from './containers/user/profile/EditProfile';
import EditPhoto from './containers/user/profile/EditPhoto';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <Header />
      <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/editprofile' component={Edit} />
        <Route path='/editprofilephoto' component={EditPhoto} />

        <Route path='/steps/:id' component={ReserSteps} />
        <Route path='/rooms' component={Rooms} />
        <Route path='/room/:id' component={Room} />

        <Route exact path='*' component={NotFound} />

        
        

        
       
      </Switch>
    </BrowserRouter>

    
  </div>
  );
}

export default App;
