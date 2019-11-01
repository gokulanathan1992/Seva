import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadHeader, loadHomeCarousel, goToPrevSlide, goToNextSlide } from '../../Actions';
import Header from '../Header.js';
import Carousel from './Carousel.js';
import { Link } from 'react-router-dom';

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
        this.nextSlideInterval = setInterval(() => {
            this.props.goToNextSlide(this.props.carouselContent);
        }, 5000);
    }

    componentWillUnmount()
    {
        clearInterval(this.nextSlideInterval);
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