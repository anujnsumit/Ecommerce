import React from 'react'
import { useSearch } from '../../context/search';
import { useNavigate } from 'react-router-dom';
import { getSearchService } from '../../services/admin/productService';

const SearchInput = () => {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
          const { data } = await getSearchService(values.keyword);
          setValues({ ...values, results: data });
          navigate("/search");
      };
  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchInput;