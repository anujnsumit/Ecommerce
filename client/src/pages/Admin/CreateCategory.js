import React, { useEffect, useState } from 'react';
// component
import AdminMenu from '../../component/Layout/AdminMenu';
import CategoryForm from '../../component/Form/CategoryForm';
import WithLayout from '../../component/Layout/Layout';
import { addCategoryService, adminCatrgoryService } from '../../services/admin/categoryService';
import { toast } from 'react-toastify';
import useToggle from '../../hooks/useToggle';
import { Modal } from 'antd';

const CreateCategory = () => {
  const [categories, setCategories] = useState();
  const [name, setName] = useState("");
  const [toggle, setToggle] = useToggle();

  const getAllCategory = async () => {
    const { data: { category } } = await adminCatrgoryService();
    setCategories(category);
  }

  useEffect(() => {
    getAllCategory();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addCategoryService({ name })
      if (data?.success) {
        getAllCategory();
        setName("");
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container-fluid p-3">
      <div className='row'>
        <div className='col-md-3'><AdminMenu /></div>
        <div className='col-md-9'>
          <h1>Manage Category</h1>
          <div className='p-3 w-50'>
            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
          </div>
          <div className='w-75'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(categories) && categories.map(el =>
                  <>
                    <tr>
                      <td key={el._id}>{el.name}</td>
                      <td><button className='btn btn-primary' onClick={setToggle}>Edit</button></td>
                      <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Modal open={toggle} onCancel={setToggle} footer={null}>
          <CategoryForm />
        </Modal>
      </div>
    </div>
  )
}

export default WithLayout(CreateCategory);