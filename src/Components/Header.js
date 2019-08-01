import React, { Component } from 'react';
import '../Styles/header.less';

export default class Header extends Component
{
    constructor(props)
    {
        super(props);
        console.log("App: Constructor");
    }

    render()
    {
        return (
            <div className="header">
                <h2>Header Component</h2>
                <div className="register">
                    <button>Signup</button>
                </div>
                <div className="login">
                    <button>Login</button>
                </div>
            </div>
        )
    }
}