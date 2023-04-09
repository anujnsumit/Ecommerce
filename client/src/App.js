import {Routes,Route} from 'react-router-dom';
import { lazyLoadRoutes } from "./utils/lazyload";

 function App() {
  return (
   <>
   <Routes>
      <Route path='/' element={lazyLoadRoutes("Home")}/>
      <Route path='/about' element={lazyLoadRoutes("About")}/>
      <Route path='/contact' element={lazyLoadRoutes("Contact")}/>
      <Route path='/policy' element={lazyLoadRoutes("Policy")}/>
      <Route path='*' element={lazyLoadRoutes("pageNotFound")}/>
   </Routes>
   </>
  );
}

export default App;