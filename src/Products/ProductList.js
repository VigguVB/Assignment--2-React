import React, { useEffect, useState } from 'react';
import ProductsDisplay from './ProductsDisplay';

// Product Listing main page
function ProductList(props) {

    const [products, setProducts] = useState("")
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    setLoader(false)
                    setProducts(data)
                }
            })
    }, [])
    return (
        <div className="container">
            {loader && <div>
                <h2 style={{ textAlign: "center", marginTop: "1%" }}>Loading ....</h2>
            </div>}
            {!loader && <ProductsDisplay items={products} />}
        </div>
    );
}

export default ProductList;