import React, { Component } from 'react';
import './App.css';
import {HashRouter,Route,Switch} from "react-router-dom";
import Home from "./ui/pages/Home/Home";
import Signup from "./ui/pages/Signup/Signup";
import Login from "./ui/pages/Login/Login";
import Dashboard from "./ui/pages/Dashboard/Dashboard";
import Dish from "./ui/pages/Dish/Dish";
import Profile from "./ui/pages/Profile/Profile";
import Cart from "./ui/pages/Cart/Cart";
import Dishes from "./ui/pages/Dishes/Dishes";
import AlertBox from './ui/share/AlertBox/AlertBox'
import Sidebar from "./ui/share/sidebar/Sidebar";
import CartButton from './ui/share/CartButton/CartButton'
import {Provider} from "react-redux";
import store from "./store"
import axios from "axios"
import Settings from "./settings"
class App extends Component {
  componentDidMount() {
    // AUTH_USER
    let userId = localStorage.getItem('userId')
    if(userId) {
      axios.get(`${Settings.host}/user/${userId}`).then(res => {
        store.dispatch({ type: 'AUTH_USER', username: res.data.user.username })
      })
    }

    // LOAD_USERS
    axios.get(`${Settings.host}/users`).then(res => {
        store.dispatch({ type: 'LOAD_USERS', users: res.data.users })
      }
    )

    // LOAD_DISHES
    axios.get(`${Settings.host}/dishes`).then(res => {
        store.dispatch({ type: 'LOAD_DISHES', dishes: res.data.dishes })
      }
    )

    // LOAD_COMMENTS
    axios.get(`${Settings.host}/comments`).then(
      res => {
        const { comments } = res.data
        store.dispatch({ type: 'LOAD_COMMENTS', comments })
      }
    )
  }
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <AlertBox />
            <Route render={({location})=>{
              return location.pathname !== "/"?
              (
                <Sidebar />
              ):null
            }} />
            
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/dish/:dishId" component={Dish}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/dishes" component={Dishes}/>
              <Route path="/cart" component={Cart}/>
            </Switch> 
            <CartButton />
          </div> 
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
          