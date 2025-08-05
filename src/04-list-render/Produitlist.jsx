const Productlist = () =>{
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ];
    return(
        <main>
        {products.map((product) =>(
            <div>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>

            </div>
        ))}

        </main>
    )
}
export default Productlist ; 