import React from 'react';
import Dashboard from '../Admin/Dashboard';

const AuthContext = React.createContext({});

export class  AuthProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            test: "wtf"
        }
    }

    // this will accept the true or false after a user logs in our out and the backend sends isAuthenticated: true/false
    handleAuthChange = authentication => {
        this.setState({
            isAuthenticated: authentication
        });
    }

    render() {
        const { children } = this.props;

        return (
            <AuthContext.Provider 
                value={{
                    handleAuthChange: this.handleAuthChange,
                    isAuthenticated: this.state.isAuthenticated,
                    test: this.state.test
                }}
            >
            {children} {/** children will receive the values and be able to consume them */}
            </AuthContext.Provider>
        );
    }
}

export const AuthConsumer = AuthContext.Consumer