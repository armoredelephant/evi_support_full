import React from 'react';

import { AuthConsumer } from './AuthContext';

const AuthChecker = props => {
    return(
        <AuthConsumer>
            { ({ isLogged })  => (
                isLogged
                ?
                    <div>This will be the Dashboard componenet </div>
                    // <Dashboard /> will be loaded here
                :
                    <div>Not Logged In</div>
            )}
        </AuthConsumer>
    );
}

export default AuthChecker;