import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card-wrapper">
                <div className="signIn-card">
                    <header>
                        <h3>
                            Dashboard Login
                        </h3>
                    </header>
                    <input type="text" className="placeicons signIn-email" placeholder="&#xf0e0;    email"></input>
                    <input type="text" className="placeicons signIn-password" placeholder="&#xf023;    password"></input>
                    <div className="signIn-link-container">
                        <a href="#">forgot</a>
                    </div>
                    <button type="submit" className="signIn-submit">Sign In</button>
                </div>
            </div>
        );
    }
}
export default SignIn;