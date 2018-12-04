import React, { Component } from 'react';
import axios from 'axios';
import { AuthConsumer } from './AuthContext';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }

    // need an onClick that will set the state based on what is submitted
    handleChange = event => {
        const target = event.target;

        this.setState({ [target.name]: target.value })
    }

    /**
     * This will post the crednetials to the backend which will then check with firebase.
     * If the user is authenticated, it will run the callback from AdminSwitch.jsx to update isLogged in context
     * Then it will route to the admin dashboard page
     **/
    handleSubmit = (event, handleUpdateUser) => {
        event.preventDefault();
        
        const API_HOST_URL = process.env.API_URL;

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`${API_HOST_URL}/api/users/auth`, user).then(response => {
            const userAuthenticated = response.data.isAuthenticated;

            if(userAuthenticated) {
                handleUpdateUser()
                this.props.history.push('/Admin/dashboard')
            } 
        });
    }

    render() {
        return (
            <AuthConsumer>
                {value => (
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
                            <button type="submit" 
                                className="signIn-submit"
                                onClick={(e) => this.handleSubmit(e, value.handleUser)}>
                            Sign In
                            </button>
                        </form>
                    </div>
                )}
            </AuthConsumer>
        );
    }
}
export default SignIn;