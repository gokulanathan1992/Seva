import React, { Component } from 'react';
import '../../Styles/carousel.less';

export default class Carousel extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Carousel: Constructor");
    }

    render()
    {
        return (
            <div className="carousel-box">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/originals/ff/e4/59/ffe459582c8e4dc676d73e4b07dcabc0.jpg" className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src="https://kbob.github.io/images/sample-5.jpg" className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src="https://newevolutiondesigns.com/images/freebies/nature-hd-background-5.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}