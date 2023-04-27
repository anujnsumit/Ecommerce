import React, { useEffect, useState } from 'react';
// component
import AdminMenu from '../../component/Layout/AdminMenu';
import CategoryForm from '../../component/Form/CategoryForm';
import WithLayout from '../../component/Layout/Layout';
import { addCategoryService, adminCatrgoryService, deleteCategoryService, updateCategoryService } from '../../services/admin/categoryService';
import { toast } from 'react-toastify';
import useToggle from '../../hooks/useToggle';
import { Modal } from 'antd';

const CreateCategory = () => {
  const [categories, setCategories] = useState();
  const [name, setName] = useState("");
  const [toggle, setToggle] = useToggle();
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const obj={id:selected._id,name:updatedName}
      const {data} = await updateCategoryService(obj);
      if (data?.success) {
        toast.success(data.message)
        setToggle();
        setSelected(null)
        setUpdatedName("");
        getAllCategory();
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error("something went wrong")
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const {data} = await deleteCategoryService(id);
      if (data?.success) {
        toast.success(data.message)
        getAllCategory();
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error("something went wrong")
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
                      <td><button className='btn btn-primary' onClick={() => {
                        setToggle()
                        setUpdatedName(el.name);
                        setSelected(el)
                      }}>Edit</button></td>
                      <td><button className='btn btn-danger' onClick={()=>handleDelete(el._id)}>Delete</button></td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Modal open={toggle} onCancel={setToggle} footer={null}>
          <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
        </Modal>
      </div>
    </div>
  )
}

export default WithLayout(CreateCategory);