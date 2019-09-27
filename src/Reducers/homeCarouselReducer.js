let defState = {
    images: ["http://canamerica.adsfreevideos.com/upload/noimage.jpg"],
    textContent: [
        {
            heading: 'Default Slide-1 Heading',
            subHeading: 'Default Slide-1 Sub Heading',
            para: 'Default Slide-1 Paragraph'
        },
        {
            heading: 'Default Slide-2 Heading',
            subHeading: 'Default Slide-2 Sub Heading',
            para: 'Default Slide-2 Paragraph'
        },
        {
            heading: 'Default Slide-3 Heading',
            subHeading: 'Default Slide-3 Sub Heading',
            para: 'Default Slide-3 Paragraph'
        }
    ],
    currentIndex: 0,
    translateValue: 0,
    image: "http://canamerica.adsfreevideos.com/upload/noimage.jpg",
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
            textContent: action.content,
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