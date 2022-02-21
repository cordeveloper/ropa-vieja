const initialProductState = {
    products: [],
    productsSelected: []
}

const productReducer = (state = initialProductState, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'PRODUCTS_SELECTED':
            return {
                ...state,
                productsSelected: [...state.productsSelected, action.payload]
            }    
        default:
            return state;
    }
}

export default productReducer;