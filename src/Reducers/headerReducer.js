let defState = {
    headerTitle: 'Header Title',
    headerCTA1Label: 'CTA1',
    headerCTA2Label: 'CTA2'
} 

const headerReducer = (state = defState, action) =>
{
    if(action.type === 'loadHeaderContent')
    {
        return {
            headerTitle: action.heading,
            headerCTA1Label: action.CTA1,
            headerCTA2Label: action.CTA2
        }
    }
    else
    {
        return {
            ...state
        }
    }
}

export default headerReducer;