export const fetchProducts = (products) => {
    return {
        type: 'FETCH_PRODUCTS',
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        type: 'PRODUCTS_SELECTED',
        payload: products
    }
}

export const searchWord = (search) => {
    return {
        type: 'SEARCH_WORD',
        payload: search
    }
}