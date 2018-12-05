import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AuthChecker from './AuthChecker';
import { AuthProvider } from './AuthContext';
import { axiosGet } from '../Shared/AxiosFetch';
import SignIn from './SignIn';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: false
        }
    }

    componentWillMount() {
        this.handleUser()
    };

    handleUser = () => {
        const API_HOST_URL = process.env.API_URL;

        axiosGet(`${API_HOST_URL}/api/users`).then(
            response => this.setState({
                isLogged: response.isLogged
            })
        );
    }

    render() {
        const { isLogged } = this.state;

        return(
            <AuthProvider 
                isLogged={isLogged}
                handleUser={this.handleUser} >
                <Route path="/Admin/signin" component={SignIn} />
                <Route path="/Admin/dashboard" component={AuthChecker} />
            </AuthProvider>
        )
    }
}

export default Admin;
