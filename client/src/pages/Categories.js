import React from 'react';
// Components
import WithLayout from '../component/Layout/Layout';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const Categories = () => {
    const {apiData}=useFetch('api/v1/category/get-category');
  return (
    <div className="container" style={{ marginTop: "100px" }}>
    <div className="row container">
      {Array.isArray(apiData?.category) && apiData?.category.map((c) => (
        <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
          <div className="card">
            <Link to={`/category/${c.slug}`} className="btn cat-btn">
              {c.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default WithLayout(Categories);