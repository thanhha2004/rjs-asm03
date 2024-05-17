import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route path='/shop'  element={<ShopPage/>}/>
        <Route path='/cart'  element={<CartPage/>}/>
        <Route path='/Checkout'  element={<CheckOutPage/>}/>
        <Route path='/login'  element={<LoginPage/>}/>
        <Route path='/register'  element={<RegisterPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
