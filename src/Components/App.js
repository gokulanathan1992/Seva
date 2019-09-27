import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Homepage/Home';
import Login from './LoginPage/Login';
import Admin from './AdminPage/Admin';
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
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Admin" component={Admin} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}