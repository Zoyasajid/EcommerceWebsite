import './App.css';
import CardsApi from './coponents/CardsApi';
import DetailPage from './coponents/DetailPage';
import Navbar from './coponents/Navbar';
import Cart from './coponents/Cart';

import {Routes,Route,BrowserRouter} from 'react-router-dom'
import LoginForm from './coponents/LoginForm';

function App() {
  return (
    <div className="heading">
      <BrowserRouter>
      {/* <Link to="/product">CardsApi</Link> */}
      <Routes>
      <Route path="/" element={<LoginForm/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/product' element={<CardsApi/>}/>
        <Route path="/product/:id" element={<DetailPage/>}/>
        <Route path="/product/cart" element={<Cart/>}/>
        <Route path="/form" element={<LoginForm/>}/>

      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
