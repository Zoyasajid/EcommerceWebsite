import './App.css';
import CardsApi from './coponents/CardsApi';
import Navbar from './coponents/Navbar';
import {Routes,Route} from 'react-router-dom'
import Product from './coponents/Product';

function App() {
  return (
    <div className="heading">
            <Navbar/>

      <Routes>
        <Route path="/" element={<CardsApi/>}/>
        <Route path="/product/id" element={<Product/>}/>
      </Routes>
      <div className='App'>
              <h2>DEALS OF THE DAY</h2>
    </div>     <CardsApi/>
    </div>
  );
}

export default App;
