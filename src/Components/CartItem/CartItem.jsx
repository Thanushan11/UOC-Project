import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItem = () => {
    const{all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitem'>
        <div className="cartitem-format-main">
         <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            { return <div>
                <div className="cartitems-format  cartitem-format-main">
                    <img src={e.image} alt="" className="carticon-product-icon" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity' >{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} className='cartitems-removeicon' onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
            </div>    
            }
            return null;
       })}
       <div className="cartitems-down">
        <div className="cartitem-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="total">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                   
                </div>
                 <hr />
                <div className="total">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                  
                </div>
                <hr />
                <div className="total">
                  <p>Total</p>
                  <p>${getTotalCartAmount()}</p>
                  
                </div>
               
            </div>
            
            <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>if you have promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promocode' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
       </div>
       
  )
}
export default CartItem
