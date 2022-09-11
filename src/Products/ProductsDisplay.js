import React from 'react';
import { Link } from 'react-router-dom';
import './prodisplay.css';

// Product Listing child page

function ProductsDisplay(props) {

    const renderProducts = ({ items }) => {
        if (items) {
            return items.map((item) => {
                return (
                    <Link to={`/details/${item.id}`} key={item.id} style={{textDecoration:"none", color:"black"}} >
                    <div className="col">
                        <div className="card" style={{ height: '500px' }}>
                            <img src={item.image} className="card-img-top" style={{ height: '300px', width: '70%', marginLeft: "15%", marginTop:"2%" }} />
                            <div className="card-body">
                                <div style={{height:"90px", textAlign:"center"}}>
                                    <h5>{item.title}</h5>
                                </div>
                                <div style={{height:"30px", marginTop: "1%", color:"hsl(120, 56%, 35%)", fontWeight:"600", textAlign:"center"}}>  
                                    <span>{item.rating.rate}</span>
                                    <span style={{marginLeft:"2%", marginRight:"5%"}} className="fa fa-star"></span>
                                    <span>by {item.rating.count} customers</span>
                                </div>
                                <div style={{height:"30px",  marginTop: "3%", textAlign:"center"}}>  
                                    <h4>₹ {item.price}</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                    </Link>
                )
            })
        }
    }
    return (
        <div style={{marginTop:"1%"}} className="row row-cols-1 row-cols-3 g-4">
            {renderProducts(props)}
        </div>
    );
}

export default ProductsDisplay;