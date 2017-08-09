import React, { Component } from 'react'
import TitleHeader from '../../share/public-header/TitleHeader'
import './signup.css'
import {
  Link
} from 'react-router-dom'
import axios from "axios";
import Settings from "../../../settings"
import store from "../../../store"
class Signup extends Component {
	
  handleSub=(e)=>{
  	e.preventDefault();
  	let username=this.username.value
  	let password=this.password.value
  	let data={
  		username:username,
  		password:password
	}
	axios.post(`${Settings.host}/user/signup`,data).then(res=>{
		console.log(res)
  		if(res.data.username){
        
  			store.dispatch({type:"login",username:res.data.username})
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push('/dashboard')
  		}
  	}).catch(err => {
        console.log(err.response.data.msg)
        store.dispatch({ type: 'SHOW_ALERT', msg: err.response.data.msg })
    })
  }		
  render() {
    return(
      <div className="signup">
        <TitleHeader title="signup" />
        <div className="signup-content">
          <div className="signup-hero" >
            <h1 className="title">
              注册
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form className="signup-form" onSubmit={this.handleSub}>
            <div className="signup-text-inputs">
              <div className="signup-text-inputs-inner">
                <input ref={value=>this.username=value} type="text" placeholder="用户名" />
                <input ref={value=>this.email=value} type="text" placeholder="Email" />
                <input ref={value=>this.password=value} type="password" placeholder="password" />
                <input type="password" placeholder="再输一遍" />
              </div>
            </div>
            <div className="signup-actions">
              <button type="submit">注册</button>
            </div>
          </form>
          <div className="signup-other-option">
            <Link to="/login">已有账号？直接登录</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup