import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './Products/ProductList';
import EachProduct from './Products/EachProduct';
import Header from './Layout/Header';

function Routing(props) {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='details/:id' element={<EachProduct />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;