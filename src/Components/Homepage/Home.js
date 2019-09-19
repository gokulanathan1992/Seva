import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadHeader, loadHomeCarousel, goToPrevSlide, goToNextSlide } from '../../Actions';
import Header from '../Header.js';
import Carousel from './Carousel.js';

class Home extends Component
{
    constructor(props)
    {
        super(props);
        console.log("HomePage: Constructor");
    }

    componentWillMount()
    {
        this.props.loadHeader();
        this.props.loadHomeCarousel();
    }

    componentDidMount()
    {
        setInterval(() => {
            this.props.goToNextSlide(this.props.carouselContent);
        }, 5000);
    }

    render()
    {
        return (
            <div>
                <Header content={this.props.headerContent}/>
                <Carousel content={this.props.carouselContent} prevSlide={this.props.goToPrevSlide} nextSlide={this.props.goToNextSlide}/>
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
    return bindActionCreators({loadHeader, loadHomeCarousel, goToPrevSlide, goToNextSlide}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);