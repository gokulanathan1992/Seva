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