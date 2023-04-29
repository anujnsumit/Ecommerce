import React, { useState, useEffect } from 'react'
import WithLayout from '../component/Layout/Layout';
import { filterProductService, getProductService } from '../services/admin/productService';
import { Checkbox, Radio } from "antd";
import { adminCatrgoryService } from '../services/admin/categoryService';
import { Prices } from '../component/Prices';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [price, setPrice] = useState([]);

  // get all products
  const getAllProducts = async () => {
    const { data } = await getProductService();
    setProducts(data.products);
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  const getAllCategory = async () => {
    const { data: { category } } = await adminCatrgoryService();
    setCategories(category);
  }

  useEffect(() => {
   if(!checked.length || !price.length) getAllCategory();

  }, [checked.length,price.length])


  
  const filterProducts=async()=>{
    const {data}=await filterProductService({checked,radio:price});
    setProducts(data.products);
  }

  useEffect(()=>{
    if(checked.length || price.length) filterProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[checked.length,price.length])

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  return (
    <div className='row mt-3'>
      <div className='col-md-2'>
        <h4 className='text-center'>Filter By Category</h4>
        <div className='d-flex flex-column'>
          {Array.isArray(categories) && categories.map(el =>
            <Checkbox key={el._id} onChange={(e) => handleFilter(e.target.checked, el._id)}>
              {el.name}
            </Checkbox>
          )}
        </div>
        <div className='d-flex flex-column'>
        <button className='btn btn-danger' onClick={()=>window.location.reload()}>RESET FILTERS</button>
        </div>
        {/* Price filter */}
        <h4 className='text-center'>Filter By Price</h4>
        <div className='d-flex flex-column mt-4'>
          <Radio.Group onChange={(e) => setPrice(e.target.value)}>
            {Array.isArray(Prices) && Prices.map(el =>
              <div key={el._id}>
                <Radio value={el.array}>
                  {el.name}
                </Radio>
              </div>
            )}
          </Radio.Group>
        </div>
      </div>

      <div className='col-md-9'>
        <h1 className='text-center'>All Products</h1>
        <div className='d-flex flex-wrap'>
          {Array.isArray(products) && products.map(el =>
            <div className="card m-2" style={{ width: "18rem" }} >
              <img src={`/api/v1/product/product-photo/${el._id}`} class="card-img-top" alt={el.name} />
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">{el.description}</p>
                <p className="card-text">$ {el.price}</p>
                <button className='btn btn-primary ms-1'>More Details</button>
                <button className='btn btn-secondary ms-1'>Add To Cart</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WithLayout(Home, "Home");