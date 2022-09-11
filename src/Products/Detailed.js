import React from 'react';
import './detailed.css'

// Product Details Child page

function Detailed(props) {
    const displayItem = ({ items }) => {
        if (items) {
            return (<div id="main-container">
                <div id="image-container">
                    <img src={items.image} width="100%" height="570px" className='images' />
                </div>
                <div id="details-container">
                    <h4>{items.title}</h4>
                    <div style={{ height: "380px", marginTop: "5%", fontWeight: "600" }}>
                        <button id="ratings">
                            <span>{items.rating.rate}</span>
                            <span style={{ marginLeft: "10%", marginRight: "5%" }} className="fa fa-star"></span>
                        </button>
                        <span style={{ color: "orangered", fontWeight: "600" }}> ratings from {items.rating.count} customers</span>
                        <div style={{ marginTop: "5%", height: "160px" }}>
                            <p>{items.description}</p>
                        </div>
                        <div style={{ marginTop: "5%" }}>
                            <h2>₹ {items.price} <span style={{ fontSize: "17px", color: "hsl(120, 56%, 35%)" }}>hurry up only a few stocks left !</span></h2>
                        </div>
                    </div>
                    <button id="buyNow">
                        BUY NOW
                    </button>
                </div>
            </div>)
        }
    }
    return (
        <div id="mainDiv">
            {displayItem(props)}
        </div>
    );
}

export default Detailed;