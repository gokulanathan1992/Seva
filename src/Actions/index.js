// HEADER
// Load Header Content

export function loadHeader()
{
    return(dispatch) => 
    {
        return dispatch(loadHeaderContent('Header title', 'Login', 'Signup'));
    }
}

export function loadHeaderContent(heading, CTA1, CTA2)
{
    return {
        type: 'loadHeaderContent',
        heading: heading,
        CTA1: CTA1,
        CTA2: CTA2 
    }
}

// HOME CAROUSEL
// Load Home page Carousel Content

export function loadHomeCarousel()
{
    const images = [
        "https://i.pinimg.com/originals/ff/e4/59/ffe459582c8e4dc676d73e4b07dcabc0.jpg",
        "https://kbob.github.io/images/sample-5.jpg",
        "https://newevolutiondesigns.com/images/freebies/nature-hd-background-5.jpg"
    ];

    const image = "https://i.pinimg.com/originals/ff/e4/59/ffe459582c8e4dc676d73e4b07dcabc0.jpg";

    return(dispatch) =>
    {
        return dispatch(loadHomeCarouselContent(images, image, 'slide'));
    }
}

export function loadHomeCarouselContent(images, image, transition)
{
    return {
        type: 'loadHomeCarouselContent',
        images,
        image,
        transition
    }
}

// Return Home page Carousel Slide Width

function carouselSlideWidth()
{
    return document.querySelector('.slide').clientWidth;
    // return 100;
}

// Go to previous slide

export function goToPrevSlide(content)
{
    return(dispatch) =>
    {
        return dispatch(prevSlide(content));
    }
}

export function prevSlide(content)
{
    if(content.currentIndex === 0)
    {
        return {
            type: 'goToPrevSlide',
            currentIndex: content.images.length - 1,
            translateValue: content.translateValue - carouselSlideWidth() * (content.images.length - 1),
            image: content.images[content.images.length - 1]
        }
    }

    else
    {
        return {
            type: 'goToPrevSlide',
            currentIndex: content.currentIndex - 1,
            translateValue: content.translateValue + carouselSlideWidth(),
            image: content.images[content.currentIndex - 1]
        }
    }
}

// Go to next slide

export function goToNextSlide(content)
{
    return(dispatch) =>
    {
        return dispatch(nextSlide(content));
    }
}

export function nextSlide(content)
{
    if(content.currentIndex === content.images.length - 1)
    {
        return {
            type: 'goToNextSlide',
            currentIndex: 0,
            translateValue: 0,
            image: content.images[0]
        }
    }

    else
    {
        return {
            type: 'goToNextSlide',
            currentIndex: content.currentIndex + 1,
            translateValue: content.translateValue - carouselSlideWidth(),
            image: content.images[content.currentIndex + 1]
        }
    }
}

