import React from 'react'
import CartItem from './CartItem';

const ListCarts = ({ listCarts }) => {
  const renderListCarts = () => {
    return listCarts.map((prd) => {
      return <CartItem key={prd.id} product={prd} />;
    });
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridRowGap: "10px" }}>{renderListCarts()}</div>
  )
}

export default ListCarts;