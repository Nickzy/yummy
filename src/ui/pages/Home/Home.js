import React,{Component} from "react";
import Logo from "./logo.svg";
import "./home.css";
import {Link} from "react-router-dom";
class Home extends Component{
	render(){
		return(
			<div className="home">
				<div className="hero">
					<img className="app-logo" src={Logo} alt="logo" />
					<h1 className="title">
						吮指
					</h1>
					<p className="slogan">
						享受舌尖上的艳遇
					</p>
				</div>
				<div className="actions">
					<Link to="/login">登陆</Link>
					<Link to="/signup">注册</Link>
				</div>
				
			</div>
			
		)
	}
}

export default Home