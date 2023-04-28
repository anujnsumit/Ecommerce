import React, { useEffect, useState } from 'react'
import WithLayout from '../../component/Layout/Layout';
import AdminMenu from '../../component/Layout/AdminMenu';
import { adminCatrgoryService } from '../../services/admin/categoryService';
import { Select } from 'antd';
import { createProductService } from '../../services/admin/productService';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const initalProductState = {
  name: "",
  description: "",
  price: "",
  quantity: "",
  shipping: "",
  photo: ""
}

const { Option } = Select;

const CreateProduct = () => {
  const [productState, setProductState] = useState(initalProductState);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);

  const getAllCategory = async () => {
    const { data: { category } } = await adminCatrgoryService();
    setCategories(category);
  }

  useEffect(() => {
    getAllCategory();
  }, [])

  const handleChange = ({ target: { name, value } }) => {
    setProductState({ ...productState, [name]: value })
  }

  const handleCreate = async(e) => {
  e.preventDefault();
    const productData = new FormData();
      productData.append("name", productState.name);
      productData.append("description", productState.description);
      productData.append("price", productState.price);
      productData.append("quantity", productState.quantity);
      productData.append("photo", productState.photo);
      productData.append("category", category);
    const {data}=await createProductService(productData);
    if (data?.success) {
      toast.success(data?.message);
      setProductState(initalProductState)
      Navigate("/dashboard/admin/products");
    } else{
      toast.error(data.message);
    }
  }

  return (
    <div className="container-fluid m-3 p-3">
      <div className='row'>
        <div className='col-md-3'><AdminMenu /></div>
        <div className='col-md-9'>
          <h1>Create Product</h1>
          <div className='m-1 w-75'>
            <Select
              bordered={false}
              placeholder="Select a category"
              size="large"
              showSearch
              className='form-select mb-3'
              onChange={(value) => {
                setCategory(value)}}
            >
              {Array.isArray(categories) && categories.map(c => (
                <Option key={c._id} value={c._id}>{c.name}</Option>
              ))}
            </Select>
            <div className='mb-3'>
              <label className='btn btn-outline-secondary'>
                {productState?.photo ? productState?.photo?.name : "Upload Photo"}
                <input type='file' name="photo" accept='images/*' onChange={(e) => setProductState({ ...productState, photo: e.target.files[0] })} />
              </label>
            </div>
            {/* image preview */}
            <div className='mb-3'>
              {productState?.photo && (
                <div className='text-center'>
                  <img src={URL.createObjectURL(productState?.photo)}
                  alt="product_photo"
                  height={"200px"}
                  className='img img-responsive'/>
                </div>
              )}
            </div>
            <div className='mb-3'>
              <input
                type='text'
                value={productState.name}
                className='forn-control'
                placeholder='write a name'
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className='mb-3'>
              <textarea
                type='text'
                value={productState.description}
                className='forn-control'
                placeholder='write a description'
                onChange={handleChange}
                name='description'
              />
            </div>
            <div className='mb-3'>
              <input
                type='text'
                value={productState.price}
                className='forn-control'
                placeholder='write a price'
                onChange={handleChange}
                name='price'
              />
            </div>
            <div className='mb-3'>
              <input
                type='text'
                value={productState.quantity}
                className='forn-control'
                placeholder='write a quantity'
                onChange={handleChange}
                name='quantity'
              />
            </div>
            <Select
              bordered={false}
              placeholder="Select Shipping "
              size="large"
              showSearch
              className="form-select mb-3"
              onChange={(value)=>setProductState({...productState,shipping:value})}
              name="shipping"
            >
              <Option value="0">No</Option>
              <Option value="1">Yes</Option>
            </Select>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" onClick={handleCreate}>
              CREATE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithLayout(CreateProduct);