const ProductINFO = () => {
    const product = {
        name : "laptop",
        price : 1200 , 
        aviability : "in stock"
    } 
    return(
        <div>
            <h1>Name: {product.name}</h1>
            <h1>price : {product.price}</h1>
            <h1>aviability : {product.aviability}</h1>

        </div>
    )
}
export default ProductINFO;