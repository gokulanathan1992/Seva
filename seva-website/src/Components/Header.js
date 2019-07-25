import React, { Component } from "react";
import '../Styles/Header.css';

export default class Header extends Component 
{
    constructor(props)
    {
        super(props);
        console.log("Header: constructor");
    }

    render() 
    {
        return (
            <header className="header">
            </header>
        )
    }

}