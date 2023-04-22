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

export function lazyLoadPrivateRoutes(componentName) {
  const LazyElement =loadable({
    loader:() => import(`../pages/user/${componentName}.js`),
    loading:Loading
  })
  return (
      <LazyElement />
  );
}

export function lazyLoadAdminRoutes(componentName) {
  const LazyElement =loadable({
    loader:() => import(`../pages/Admin/${componentName}.js`),
    loading:Loading
  })
  return (
      <LazyElement />
  );
}