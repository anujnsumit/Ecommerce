import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Component
import { registerUserService } from '../services/auth/registerService';
import WithLayout from '../component/Layout/Layout';
// Css
import "../styles/AuthStyles.css";

const registerInitial = {
  name: "",
  email: "",
  password: '',
  phone: '',
  address: ""
}

const Register = () => {
  const [registerUser, setRegisterUser] = useState(registerInitial);
  const navigate=useNavigate()
  const { name, email, password, phone, address } = registerUser;

  const handleChage=({target:{value,name}})=>{
      setRegisterUser({...registerUser,[name]:value})
  }

const handleSubmit=async(e)=>{
  e.preventDefault();
  registerUserService(registerUser);
  navigate("/login");
}

  return (
    <div className="form-container">
       <h4 className="title">REGISTER</h4>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <input type="text"
            class="form-control"
            value={name}
            id="exampleInputName"
            onChange={handleChage}
            name="name"
            placeholder='Enter Your Name' 
            required
            />
        </div>

        <div class="mb-3">
          <input type="email"
            class="form-control"
            id="exampleInputEmail"
            value={email}
            onChange={handleChage}
            name="email"
            placeholder='Enter Your Email' 
            required
            />
        </div>

        <div class="mb-3">
          <input type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handleChage}
            name="password"
            placeholder='Enter Your Password'
            required
             />
        </div>

        <div class="mb-3">
          <input type="text"
            class="form-control"
            id="exampleInputPhone"
            value={phone}
            onChange={handleChage}
            name="phone"
            placeholder='Enter Your Phone' 
            required
            />
        </div>

        <div class="mb-3">
          <input type="text"
            class="form-control"
            value={address}
            onChange={handleChage}
            name="address"
            id="exampleInputAddress"
            placeholder='Enter Your Address'
            required
            />
        </div>

        <button
          type="submit"
          class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default WithLayout(Register, "Register"); 