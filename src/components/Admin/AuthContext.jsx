import React from 'react';
import axios from 'axios';
import { throws } from 'assert';

const AuthContext = React.createContext({});

export class  AuthProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            currentUser: null
        }
    }

    // this will accept the true or false after a user logs in our out and the backend sends isAuthenticated: true/false
    handleAuthChange = authentication => {
        this.setState({
            isAuthenticated: authentication
        });
    }

    // make a function that will grab auth().currentUser from the backend?
    handleUser = () => {
        const API_HOST_URL = process.env.API_URL;

        axios.get(`${API_HOST_URL}/api/users`).then(response => {
            console.log(response)
            this.setState({
                // what is this?
            });
        })
    }



    render() {
        const { children } = this.props;
        const { currentUser, isAuthenticated } = this.state;

        return (
            <AuthContext.Provider 
                value={{
                    handleAuthChange: this.handleAuthChange,
                    isAuthenticated: isAuthenticated,
                    currentUser: currentUser
                }}
            >
            {children} {/** children will receive the values and be able to consume them */}
            </AuthContext.Provider>
        );
    }
}

export const AuthConsumer = AuthContext.Consumer