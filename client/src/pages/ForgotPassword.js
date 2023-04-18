import React, { useState } from 'react'
import WithLayout from '../component/Layout/Layout'
import { useNavigate } from 'react-router-dom';
import { forgotPasswordService } from '../services/auth/loginService';

const loginInitial = {
    email: "",
    newPassword: "",
    answer:""
  }

const ForgotPassword = () => {
    const [loginUser, setLoginUser] = useState(loginInitial);
  const navigate = useNavigate();

  const { email,newPassword,answer } = loginUser;

  const handleChage = ({ target: { value, name } }) => {
    setLoginUser({ ...loginUser, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    forgotPasswordService(loginUser);
    navigate( "/login");
  }

  return (
    <div className="form-container">
        <h4 className="title">Reset Password</h4>
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
          <input type="text"
            class="form-control"
            id="exampleInputAnswer"
            value={answer}
            onChange={handleChage}
            name="answer"
            placeholder='Enter Your Favourite Sport'
            required
          />
        </div>
        <div class="mb-3">
          <input type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={newPassword}
            onChange={handleChage}
            name="newPassword"
            placeholder='Enter Your Password'
            required
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary">Reset</button>
      </form>
    </div>
  )
}

export default WithLayout(ForgotPassword,"Forgot Password")