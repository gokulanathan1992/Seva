let defState = {
    images: [
        "https://i.pinimg.com/originals/ff/e4/59/ffe459582c8e4dc676d73e4b07dcabc0.jpg",
        "https://kbob.github.io/images/sample-5.jpg",
        "https://newevolutiondesigns.com/images/freebies/nature-hd-background-5.jpg"
    ],
    textContent: [
        {
            heading: 'Slide-1 Heading',
            subHeading: 'Slide-1 Sub Heading',
            para: 'Slide-1 Paragraph'
        },
        {
            heading: 'Slide-2 Heading',
            subHeading: 'Slide-2 Sub Heading',
            para: 'Slide-2 Paragraph'
        },
        {
            heading: 'Slide-3 Heading',
            subHeading: 'Slide-3 Sub Heading',
            para: 'Slide-3 Paragraph'
        }
    ],
    currentIndex: 0,
    translateValue: 0,
    image: "https://i.pinimg.com/originals/ff/e4/59/ffe459582c8e4dc676d73e4b07dcabc0.jpg",
    transition: 'fade'
}

const homeCarouselReducer = (state = defState, action) =>
{
    switch (action.type)
    {
        case 'loadHomeCarouselContent': return {
            ...state,
            images: action.images,
            image: action.image,
            transition: action.transition
        }

        case 'goToPrevSlide': return {
            ...state,
            currentIndex: action.currentIndex,
            translateValue: action.translateValue,
            image: action.image
        }

        case 'goToNextSlide': return {
            ...state,
            currentIndex: action.currentIndex,
            translateValue: action.translateValue,
            image: action.image
        }

        default: return {
            ...state
        }
    }
}

export default homeCarouselReducer;