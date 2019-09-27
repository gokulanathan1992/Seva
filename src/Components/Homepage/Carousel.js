import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/carousel.less';

const Carousel = (props) =>
{
    var slideTransformation = {
        transform: `translateX(${props.content.translateValue}px)`,
        transition: 'transform ease-out 1s'
    }

    var slideContent = (textContent) =>
    {
        return (
            <div className="slideContent">
                <div className="slideHeading">
                    <h1>{textContent.heading}</h1>
                </div>
    
                <div className="slideSubHeading">
                    <h3>{textContent.subHeading}</h3>
                </div>
    
                <div className="slidePara">
                    <p>{textContent.para}</p>
                </div>
            </div>
        )
    }

    var renderSlides = () =>
    {
        if(props.content.transition === 'fade')
        {
            return (
                <div className="slideWrapper">
                    <Parallax className="slide" bgImage={props.content.image} bgClassName="fadeImage" strength={1000} renderLayer={percentage => (
                        <div style={{ 
                            position: 'absolute',
                            background: `rgba(0, 0, 0, ${percentage * 0.5})`,
                            width: '100%',
                            height: '100%'
                        }} />)}>
                        {slideContent(props.content.textContent[props.content.currentIndex])}
                    </Parallax>
                </div>
            )
        }

        else
        {
            return (
                <div className="slideWrapper" style={slideTransformation}>
                    {
                        props.content.images.map((image, i) => {
                            return (
                                <Parallax key={i} className="slide" bgImage={image} bgClassName="slideImage" strength={1000} renderLayer={percentage => (
                                    <div style={{ 
                                        position: 'absolute',
                                        background: `rgba(0, 0, 0, ${percentage * 0.5})`,
                                        width: '100%',
                                        height: '100%'
                                    }} />)}>
                                    {slideContent(props.content.textContent[i])}
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
                
            <div className="backArrow arrow" onClick={()=>props.prevSlide(props.content)}>
                <FontAwesomeIcon className="arrowIcon" icon={faChevronLeft} size="3x"></FontAwesomeIcon>
            </div>
            
            <div className="nextArrow arrow" onClick={()=>props.nextSlide(props.content)}>
                <FontAwesomeIcon className="arrowIcon" icon={faChevronRight} size="3x"></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Carousel;