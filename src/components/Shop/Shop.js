import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.JSON';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(fakeData)
        .then(res => res.json())
        .then(data =>setProducts(data))
    
    },[])
   
    const items = products.slice(0,10);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    items.map(item => {
                        return (
                            <div className="lov">
                                <Product product = {item} ></Product>
                            </div>
                        )
                    })
                }
            </div>
            <div className="shopping-card">
                    <h3>This is card</h3>
            </div>
            
        </div>
    );
};

export default Shop;