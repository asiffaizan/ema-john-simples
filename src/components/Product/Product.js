import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img} = props.product
    console.log(props.product);
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-name'>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Product;