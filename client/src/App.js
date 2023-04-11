import {Routes,Route} from 'react-router-dom';
import { lazyLoadRoutes } from "./utils/lazyload";
import PageNotFound from './pages/PageNotFound';

 function App() {
  return (
   <>
   <Routes>
      <Route path='/' element={lazyLoadRoutes("Home")}/>
      <Route path='/about' element={lazyLoadRoutes("About")}/>
      <Route path='/contact' element={lazyLoadRoutes("Contact")}/>
      <Route path='/policy' element={lazyLoadRoutes("Policy")}/>
      <Route path='/category' element={lazyLoadRoutes("Category")}/>
      <Route path='/register' element={lazyLoadRoutes("Register")}/>
      <Route path='/login' element={lazyLoadRoutes("Login")}/>
      <Route path='/cart' element={lazyLoadRoutes("Cart")}/>
      <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  );
}

export default App;