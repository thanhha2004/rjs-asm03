import React from 'react'
import styles from './index.module.css';
const CartItem = ({ product }) => {

  return (
    <div style={{ width: "18rem" }} className={`${styles.category} card col-4`}>
      <img src={product.img1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <a href="#" className="">
          {product.price}
        </a>
      </div>
    </div>
  )
}

export default CartItem;