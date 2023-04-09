import loadable from 'react-loadable';
import Loading from '../component/Layout/Loading';

export function lazyLoadRoutes(componentName) {
  const LazyElement =loadable({
    loader:() => import(`../pages/${componentName}.js`),
    loading:Loading
  })
  

  return (
      <LazyElement />
  );
}