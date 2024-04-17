import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'


const ProductDisplay = (props) => {
    const {product}=props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
            <div className="productdisplay-img">
                <img  className='productdisplay-main-img' src={product.image} alt="" />
            
        </div>
      </div>
     
      <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                            <div className="productdisplay-right-oldprice">${product.old_price}</div>
                            <div className="productdisplay-right-newprice">${product.new_price}</div>
                </div>
                
                <div className="productdisplay-right-description">
                Elevate your casual ensemble with our Men's Green Solid Zippered Full-Zip Slim Fit Bomber Jacket. Crafted with meticulous attention to detail, this jacket boasts a sleek slim-fit design that accentuates your silhouette while offering comfort and flexibility. The rich green hue adds a vibrant touch to your wardrobe, perfect for both daytime outings and evening gatherings. Featuring a full-zip closure and zippered pockets, it combines functionality with style effortlessly. Whether paired with jeans for a laid-back look or layered over a shirt for a more polished appearance, this bomber jacket is a versatile addition to any modern man's wardrobe. Experience the perfect blend of contemporary fashion and practicality with this standout piece.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>

                    </div>
                    <button>Add TO Cart</button>
                    <p className='productdisplay-right-category'><span>Category:</span> Women,T-Shirt,Crop Top</p>
                    <p className='productdisplay-right-category'><span>Tags:</span> Modern,Latest,</p>
                </div>
        </div>
    </div>
  )
}

export default ProductDisplay
