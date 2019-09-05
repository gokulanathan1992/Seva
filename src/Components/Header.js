import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadHeader } from '../Actions';
import { Link } from 'react-router-dom';
import '../Styles/header.less';

class Header extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Header: Constructor");
    }

    componentWillMount()
    {
        this.props.loadHeader();
    }

    render()
    {
        return (
            <div className="header">
                <div className="header-content">
                    <h4>{this.props.content.headerTitle}</h4>
                    <div className="register">
                        <button className="btn">{this.props.content.headerCTA2Label}</button>
                    </div>
                    <div className="login">
                        <Link to='/Login'>
                            <button className="btn">{this.props.content.headerCTA1Label}</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>
{
    return {
        content: state.headerReducer
    }
};

const mapDispatchToProps = (dispatch) => 
{
    return bindActionCreators({loadHeader}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);