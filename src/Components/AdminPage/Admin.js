import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadHeader } from '../../Actions';
import { CSVLink } from 'react-csv';

class Admin extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Admin: Constructor");
    }

    componentWillMount()
    {
        this.props.loadHeader();
    }

    render()
    {
        return (
            <div>
                <div>Admin Component</div>
                <CSVLink data={[this.props.headerContent]} filename={"StoreDownload.csv"} className="btn btn-primary">Download</CSVLink>
            </div>
        )
    }
}

const mapStateToProps = (state) =>
{
    return {
        headerContent: state.headerReducer,
        carouselContent: state.homeCarouselReducer
    }
};

const mapDispatchToProps = (dispatch) => 
{
    return bindActionCreators({loadHeader}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);