import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
            translateValue: 0,
            image: "https://i.pinimg.com/originals/ff/e4/59/ffe459582c8e4dc676d73e4b07dcabc0.jpg",
            transition: 'fade'
        }
    }

    componentDidMount()
    {
        setInterval(() => {
            this.goToNextSlide();
        }, 5000);
    }

    slideWidth = () =>
    {
        return document.querySelector('.slide').clientWidth;
    }

    goToPrevSlide = () =>
    {
        if(this.state.currentIndex === 0)
        {
            return this.setState(prevState => ({
                currentIndex: prevState.images.length - 1,
                translateValue: prevState.translateValue - this.slideWidth() * (prevState.images.length - 1),
                image: prevState.images[prevState.images.length - 1]
            }))
        }
        
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth(),
            image: prevState.images[prevState.currentIndex - 1]
        }))
    }

    goToNextSlide = () =>
    {
        if(this.state.currentIndex === this.state.images.length - 1)
        {
            return this.setState(prevState => ({
                currentIndex: 0,
                translateValue: 0,
                image: prevState.images[0]
            }))
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue - this.slideWidth(),
            image: prevState.images[prevState.currentIndex + 1]
        }))
    }

    render()
    {
        var slideTransformation = {
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 1s'
        }

        var slideContent = (
            <div className="slideContent">
                <div className="slideHeading">
                    <h1>Heading</h1>
                </div>

                <div className="slideSubHeading">
                    <h3>Sub Heading</h3>
                </div>

                <div className="slidePara">
                    <p>Paragraph</p>
                </div>
            </div>
        )

        var renderSlides = () =>
        {
            if(this.state.transition === 'fade')
            {
                return (
                    <div className="slideWrapper">
                        <Parallax className="slide" bgImage={this.state.image} bgClassName="fadeImage" strength={1000}>
                            {slideContent}
                        </Parallax>
                    </div>
                )
            }

            else
            {
                return (
                    <div className="slideWrapper" style={slideTransformation}>
                        {
                            this.state.images.map((image, i) => {
                                return (
                                    <Parallax key={i} className="slide" bgImage={image} bgClassName="slideImage" strength={1000}>
                                        {slideContent}
                                    </Parallax>
                                )
                            })
                        } 
                    </div>
                )
            }
        }

        return (
            <div className="carousel-box">
                {renderSlides()}
                    
                <div className="backArrow arrow" onClick={this.goToPrevSlide}>
                    <FontAwesomeIcon className="arrowIcon" icon={faChevronLeft} size="3x"></FontAwesomeIcon>
                </div>
                
                <div className="nextArrow arrow" onClick={this.goToNextSlide}>
                    <FontAwesomeIcon className="arrowIcon" icon={faChevronRight} size="3x"></FontAwesomeIcon>
                </div>
            </div>
        )
    }
}