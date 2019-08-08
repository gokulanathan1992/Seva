import React, { Component } from 'react';
import '../../Styles/carousel.less';

export default class Carousel extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Carousel: Constructor");

        this.state = {
            images: [
                "https://i.pinimg.com/originals/ff/e4/59/ffe459582c8e4dc676d73e4b07dcabc0.jpg",
                "https://kbob.github.io/images/sample-5.jpg",
                "https://newevolutiondesigns.com/images/freebies/nature-hd-background-5.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    slideWidth = () =>
    {
        return document.querySelector('.slide').clientWidth;
    }

    goToPrevSlide = () =>
    {
        if(this.state.currentIndex === 0)
            return;
        
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () =>
    {

        if(this.state.currentIndex === this.state.images.length - 1)
        {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue - this.slideWidth()
        }))
    }

    render()
    {
        var slideTransformation = {
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
        }

        return (
            <div className="carousel-box">
                <div className="slide-wrapper" style={slideTransformation}>
                    {
                        this.state.images.map((image, i) => {
                            const imageStyle = {
                                backgroundImage: `url(${image})`,
                            }
                            return (
                                <div key={i} className="slide" style={imageStyle}></div>
                            )
                        })
                    }
                </div>
                    
                <div className="backArrow arrow" onClick={this.goToPrevSlide}>
                    <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                </div>
                
                <div className="nextArrow arrow" onClick={this.goToNextSlide}>
                    <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}