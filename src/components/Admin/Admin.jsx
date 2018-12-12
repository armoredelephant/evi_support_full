import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AuthChecker from './AuthChecker';
import { AuthProvider } from './AuthContext';
import { axiosGet } from '../Shared/AxiosFetch';
import PostArticle from './PostArticle';
import SignIn from './SignIn';

import Dashboard from './Dashboard';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
            isAdmin: false
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
        const { isAdmin, isLogged } = this.state;

        return(
            <AuthProvider 
                isLogged={isLogged}
                isAdmin={isAdmin}
                handleUser={this.handleUser} >
                <Route path="/Admin/signin" component={SignIn} />
                <Route path="/Admin/dashboard" component={AuthChecker} />
                <Route path="/Admin/test" component={Dashboard} />
                <Route path="/admin/postarticle" component={PostArticle} />
            </AuthProvider>
        )
    }
}

export default Admin;
