const adminReducer = (state = {}, action) =>
{
    switch (action.type)
    {
        case 'getStoreContent': return action.content;

        case 'updateStoreContent': return action.content;

        default: return {
            ...state
        }
    }
}

export default adminReducer;