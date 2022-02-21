const initialSearchState = {
    search: ''
}

const searchReducer = (state = initialSearchState, action) => {
    switch(action.type) {
        case 'SEARCH_WORD':
            return {
                ...state,
                search: action.payload
            }
        default: 
            return state
            
    }
}

export default searchReducer;