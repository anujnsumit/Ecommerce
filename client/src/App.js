import {Routes,Route} from 'react-router-dom';
import { lazyLoadRoutes,lazyLoadPrivateRoutes } from "./utils/lazyload";
import PageNotFound from './pages/PageNotFound';
import PrivateRoutes from './component/Routes/PrivateRoute';
import Dashboard from './pages/user/Dashboard';

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
         {/* private route */}
      <Route path='/dashboard' element={<PrivateRoutes/>}>
         <Route path='/dashboard' element={lazyLoadPrivateRoutes("Dashboard")}/>
      </Route>

      <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  );
}

export default App;