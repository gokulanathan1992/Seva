import React, { Component } from 'react';
import Header from './Header.js';
import '../Styles/app.less';

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        console.log("App: Constructor");
    }

    render()
    {
        return (
            <div className="app">
                <Header/>
            </div>
        )
    }
}