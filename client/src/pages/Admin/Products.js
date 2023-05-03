import React, { useEffect, useState } from 'react'
import WithLayout from '../../component/Layout/Layout'
import AdminMenu from '../../component/Layout/AdminMenu'
import { getProductService } from '../../services/admin/productService'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const { data } = await getProductService();
        if (data.success) {
            setProducts(data.products)
            toast.success(data.message);
        } else {
            toast.error(data.message)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu />
            </div>
            <div className='col-md-9'>
                <h1 className='text-center'>All Products List</h1>
                <div className='d-flex'>
                    {Array.isArray(products) && products.map(el =>
                        <Link to={`/dashboard/admin/product/${el.slug}`} key={el._id} className='product-link'>
                            <div className="card m-2" style={{ width: "18rem" }} >
                                <img src={`/api/v1/product/product-photo/${el._id}`} class="card-img-top" alt={el.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{el.name}</h5>
                                    <p className="card-text">{el.description}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WithLayout(Products)