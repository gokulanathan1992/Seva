import React, { Component } from 'react';
import '../Styles/header.less';

export default class Header extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Header: Constructor");
    }

    render()
    {
        return (
            <div className="header">
                <div className="header-content">
                    <h4>Header Component</h4>
                    <div className="register">
                        <button className="btn">Signup</button>
                    </div>
                    <div className="login">
                        <button className="btn">Login</button>
                    </div>
                </div>
            </div>
        )
    }
}