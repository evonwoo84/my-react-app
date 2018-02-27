import React, { Component } from 'react';

class LoginPage extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.loginHandleSubmit = this.loginHandleSubmit.bind(this);
        this.nameHandleChange = this.nameHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
    }

    loginHandleSubmit(e)
    {
        alert('Alert - ' + this.state.name);
        //console.info(this.state);
    }

    nameHandleChange(e)
    {
        this.setState({name: e.target.value})
    }
    passwordHandleChange(e)
    {
        this.setState({password: e.target.value})
    }
    
    render() {
        return(
            <div className="LoginPage">
                <h1>Login Page for {this.props.title}</h1>
                <input type = "text" placeholder = {this.props.phname} value={this.state.name} onChange={this.nameHandleChange}/>
                <br/> 
                <br/>
                <input type = "text" placeholder = {this.props.phpassword} value={this.state.password} onChange={this.passwordHandleChange}/>
                <br/>
                <br/>
                <button onClick={this.loginHandleSubmit}>Login</button>
                <br/>
                <br/>
            </div>
        );
    }
}

export default LoginPage;