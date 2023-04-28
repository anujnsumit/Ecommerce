import {Routes,Route} from 'react-router-dom';
import { lazyLoadRoutes,lazyLoadPrivateRoutes, lazyLoadAdminRoutes } from "./utils/lazyload";
import PageNotFound from './pages/PageNotFound';
import PrivateRoutes from './component/Routes/PrivateRoute';
import AdminRoutes from './component/Routes/AdminRoute';

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
      <Route path='/forgot-password' element={lazyLoadRoutes("ForgotPassword")}/>
      <Route path='/cart' element={lazyLoadRoutes("Cart")}/>
         {/* private route */}
      <Route path='/dashboard' element={<PrivateRoutes/>}>
         <Route path='user' element={lazyLoadPrivateRoutes("Dashboard")}/>
         <Route path='user/profile' element={lazyLoadPrivateRoutes("Profile")}/>
         <Route path='user/orders' element={lazyLoadPrivateRoutes("Orders")}/>
      </Route>
      {/* Admin Route */}
      <Route path='/dashboard' element={<AdminRoutes/>}>
         <Route path='admin' element={lazyLoadAdminRoutes("AdminDashboard")}/>
         <Route path='admin/create-category' element={lazyLoadAdminRoutes("CreateCategory")}/>
         <Route path='admin/create-product' element={lazyLoadAdminRoutes("CreateProduct")}/>
         <Route path='admin/products' element={lazyLoadAdminRoutes("Products")}/>
         <Route path='admin/users' element={lazyLoadAdminRoutes("Users")}/>
      </Route>

      <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  );
}

export default App;