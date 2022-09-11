import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detailed from './Detailed';
let url;

// Product Details main page

function EachProduct(props) {

    const param = useParams();
    url = `https://fakestoreapi.com/products/${param.id}`;

    const [itemData, setItemdata] = useState("")
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    setItemdata(data)
                    setLoader(false)
                }
            })
    }, [])
    return (
        <Fragment>
            {loader && <div>
                <h2 style={{ textAlign: "center", marginTop: "1%" }}>Loading ....</h2>
            </div>}
            {!loader && <Detailed items={itemData} />}
        </Fragment>

    );
}

export default EachProduct;