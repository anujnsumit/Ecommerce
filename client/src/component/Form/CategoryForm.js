import React from 'react'

const CategoryForm = ({value,setValue,handleSubmit}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    value={value} 
                    placeholder='Enter new category' 
                    onChange={(e)=>setValue(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default CategoryForm;