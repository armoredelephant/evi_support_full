import React from 'react';

const AuthContext = React.createContext({});

export class  AuthProvider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <AuthContext.Provider 
                value={{
                    handleUser: this.props.handleUser,
                    isLogged: this.props.isLogged
                }}
            >
            {children} {/** children will receive the values and be able to consume them */}
            </AuthContext.Provider>
        );
    }
}

export const AuthConsumer = AuthContext.Consumer