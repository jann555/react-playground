import  { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CartPage from './routes/cart-page/cart-page.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='authentication' element={<Authentication />} />
        <Route path='cart' element={<CartPage/>}/>
      </Route>
    </Routes>
  );    
}

export default App;
