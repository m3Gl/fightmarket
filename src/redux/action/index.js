
export const addCart = (product) => {
    return {
        type: 'ADDPRODUCT',
        payload: product,
    }
}

export const deleteCart = (product) => {
    return {
        type: 'DELETEPRODUCT',
        payload: product,
    }
}