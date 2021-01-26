export const handleSingleProduct = ({
    allProductArray,
    currentProduct
}) => {
    if(allProductArray > 0 ) {
        return allProductArray.map(item => item.id === currentProduct.id)
    }
    
}