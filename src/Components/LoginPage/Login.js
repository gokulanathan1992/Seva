import React, { Component } from 'react';

export default class Login extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Login: Constructor");
    }

    render()
    {
        return (
            <div>Login Component</div>
        )
    }
}