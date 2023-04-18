import { useState } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom';

// Component
import { loginUserService } from '../services/auth/loginService';
import WithLayout from '../component/Layout/Layout';

// Css
import "../styles/AuthStyles.css";
import { useAuth } from '../context/auth';

const loginInitial = {
  email: "",
  password: ""
}

const Login = () => {
  const [loginUser, setLoginUser] = useState(loginInitial);
  const navigate = useNavigate();
  const location=useLocation();
  const [auth,setAuth]=useAuth();

  const { email, password } = loginUser;

  const handleChage = ({ target: { value, name } }) => {
    setLoginUser({ ...loginUser, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   const resp=await loginUserService(loginUser);
   const {data:{user,token}}=resp;
   setAuth({...auth,user,token})
   localStorage.setItem("auth",JSON.stringify(resp.data));
    navigate(location.state || "/");
  }

  return (
    <div className="form-container">
      <h4 className="title">Login</h4>
      <form onSubmit={handleSubmit}>
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
        <button
          type="submit"
          class="btn btn-primary" onClick={()=>navigate("/forgot-password")}>
            Forgot Password</button>
          </div>
          <div class="mb-3">
        <button
          type="submit"
          class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default WithLayout(Login, "Login");