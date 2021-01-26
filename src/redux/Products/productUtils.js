export const handleSingleProduct = ({
    prevProduct,
    currentProduct
}) => {
    return prevProduct.map(item => item.id === currentProduct.id)
}