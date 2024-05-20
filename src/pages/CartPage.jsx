import React, {useState, useEffect} from 'react'
import trash from './assets/trash.png'
import "./index.css";

function CartPage() {
  const LIST_PRODUCTS_URL = "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  const [data , setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(LIST_PRODUCTS_URL);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <div className='container pt-3 pb-3'>
      <div>
        <label>Shopping Cart</label>
      </div>
      <div className='d-flex gap-3 pt-3'>
        <table class="bg-light col-8">
          <thead>
            <tr>
              <th scope="col">Img</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={data[1].img1} alt='' className='image-product'/></td>
              <td>Apple Iphone 11 64GB</td>
              <td>10.9999 VND</td>
              <td>1</td>
              <td>10.9999 VND</td>
              <td><img src={trash} alt='' className='icon-css'/></td>
            </tr>
            <tr>
              <td><img src={data[7].img1} alt='' className='image-product'/></td>
              <td>Apple AirPods 3rd gen</td>
              <td>4.390.000 VND</td>
              <td>2</td>
              <td>8.780.000 VND</td>
              <td><img src={trash} alt='' className='icon-css'/></td>
            </tr>
          </tbody>
        </table>
        <div className='bg-light col-4 p-4'>
          <span>Cart Total</span>
          <div className='d-flex justify-content-between'>
            <label>SubTotal</label>
            <span>19.779.000 VND</span>
          </div>
          <div className='d-flex justify-content-between'>
            <label>Total</label>
            <span>19.779.000 VND</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage