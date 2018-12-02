import React from 'react';

import { AuthConsumer } from '../elements/AuthContext';

const Dashboard = props => {
    return(
        <AuthConsumer>
            { value  => (
                value.isAuthenticated 
                ?
                    <div>This will be the Dashboard componenet</div>
                :
                    <div>Not Logged In</div>
            )}
        </AuthConsumer>
    );
}

export default Dashboard;