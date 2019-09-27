// HEADER
// Load Header Content

export function loadHeader()
{
    return(dispatch) => 
    {
        return fetch('../Sample_Data/sampleData.json').then((response) => 
        {
            return response.json();
        }).then((data) =>
        {
            return dispatch(loadHeaderContent(data.header.headerTitle, data.header.headerCTA1Label, data.header.headerCTA2Label));
        })
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
    return(dispatch) =>
    {
        return fetch('../Sample_Data/sampleData.json').then((response) =>
        {
            return response.json();
        }).then((data) =>
        {
            return dispatch(loadHomeCarouselContent(data.homeCarousel.images, data.homeCarousel.images[0], data.homeCarousel.textContent, data.homeCarousel.transition));
        })
    }
}

export function loadHomeCarouselContent(images, image, content, transition)
{
    return {
        type: 'loadHomeCarouselContent',
        images,
        image,
        content,
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

