import React from 'react';

import { AuthConsumer } from './AuthContext';

const AuthChecker = props => {
    return(
        <AuthConsumer>
            { ({ isLogged, isAdmin })  => (
                isLogged
                ?
                    <div>This will be the Dashboard componenet </div>
                    // <Dashboard isAdmin={isAdmin} /> will be loaded here
                :
                    <div>Not Logged In</div>
                    // this <NoUser> component will have an interval to load of 3-4 seconds so it will not display?
            )}
        </AuthConsumer>
    );
}

export default AuthChecker;