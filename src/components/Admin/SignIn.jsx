import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }

    // need an onClick that will set the state based on what is submitted
    hangleChange = event => {
        const target = event.target;

        this.setState({ [target.name]: target.value })
    }

    // This will post the crednetials to the backend which will then check with firebase. If authenticated = login/reroute : 
    handleSubmit = event => {
        event.preventDefault();
        const API_HOST_URL = process.env.API_URL;

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(`${API_HOST_URL}/api/users`, user).then(response => {

        });
    }

    render() {
        return (
            <div className="card-wrapper">
                <form className="signIn-card">
                    <header>
                        <h3>
                        Dashboard Login
                        </h3>
                    </header>
                    <input 
                        autoComplete="email"
                        className="placeicons signIn-email" 
                        name="email"
                        onChange={this.handleChange}
                        placeholder="&#xf0e0;    email"
                        type="email" >
                    </input>
                    <input
                        autoComplete="password"
                        className="placeicons signIn-password" 
                        name="password"
                        onChange={this.handleChange}
                        placeholder="&#xf023;    password"
                        type="password">
                    </input>
                    <div className="signIn-link-container">
                        <a href="#">
                        forgot
                        </a>
                    </div>
                    <button type="submit" className="signIn-submit">
                    Sign In
                    </button>
                </form>
            </div>
        );
    }
}
export default SignIn;