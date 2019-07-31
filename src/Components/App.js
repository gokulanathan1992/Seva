import React, { Component } from 'react';
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
                This is the main App Component.
            </div>
        )
    }
}