import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.less';

const Header = (props) =>
{
    return (
        <div className="header">
            <div className="header-content">
                <h4>{props.content.headerTitle}</h4>
                <div className="register">
                    <button className="btn">{props.content.headerCTA2Label}</button>
                </div>
                <div className="login">
                    <Link to='/Login'>
                        <button className="btn">{props.content.headerCTA1Label}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;