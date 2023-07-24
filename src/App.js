import './App.css';
// import Detail from './Pages/Detail';
import CardsApi from './coponents/CardsApi';
import DetailPage from './coponents/DetailPage';
// import CardsApi from './coponents/CardsApi';
import Navbar from './coponents/Navbar';

import {Routes,Route,BrowserRouter,Link} from 'react-router-dom'
// import Product from './coponents/Product';
// import {   
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar/>,
//   },
//   {
//     path: "/detailpage",
//     element: <Detail/>,
//   },
// ]);
function App() {
  return (
    <div className="heading">
      <BrowserRouter>
      {/* <Link to="/product">CardsApi</Link> */}
      <Routes>

        <Route path='/' element={<Navbar/>}/>
        <Route path='/product' element={<CardsApi/>}/>
        {/* <Route path='/product/:id' element={<DetailPage/>}/> */}
        <Route path="/product/:id" element={<DetailPage/>}/>

      </Routes>
      </BrowserRouter>
            {/* <Navbar/> */}
{/* <CardsApi/> */}
{/* <RouterProvider router={router} /> */}

    </div>
  );
}

export default App;
