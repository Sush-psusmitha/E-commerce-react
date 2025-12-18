import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-Left">
        <div class="productdisplay-img-left">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
        </div>
        <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt=""/>
        </div>
      </div>
      <div className="productdisplay-Right">
           <h1>{product.name}</h1>
           <div class="productdisplay-right-star">
            <img src={} alt=""/>
           </div>
      </div>
    </div>
  )
}

export default ProductDisplay