import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook dùng để điều hướng

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: values => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("s", values);
      navigate('/'); // Điều hướng đến trang chính sau khi đăng nhập thành công
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Login Here</h3>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Input Account"
        id="username"
        name='taiKhoan'
        onChange={formik.handleChange}
        value={formik.values.taiKhoan}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        name='matKhau'
        onChange={formik.handleChange}
        value={formik.values.matKhau}
      />
      <div className='flex justify-end p-3'>
        <p className='mr-1'>Bạn chưa có tài khoản? </p>
        <NavLink to='/register' className='text-blue-500'>Sign Up</NavLink>
      </div>
      <button type='submit' className='mt-1'>Log In</button>
      <div className="social">
        <div className="go"><i className="fab fa-google" />  Google</div>
        <div className="fb"><i className="fab fa-facebook" />  Facebook</div>
      </div>
    </form>
  );
}
