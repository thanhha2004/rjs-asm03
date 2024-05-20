import React, { useEffect, useState }from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    password: '',
    email: '',
  });
  const [userCheck, checkUser] =  useState({});
  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedUser = localStorage.getItem('userData');
    if (storedUser != null) {
      checkUser(JSON.parse(storedUser));
    }
  }, []);
  const submit = () => {
    var userLogin;
    if (user.password.length < 8)
      {
        alert("Mật khẩu được để trống");
      }
     else if (user.email.length <= 0) 
        {
          alert("Email không được để trống");
        }
        else if (Object.keys(userCheck).length === 0)
        {
          alert("tài khoản không tồn tại");
        }
        else
          {
            userLogin = userCheck;
            var getAccount = userLogin.find(x => x.email === user.email);
            if (getAccount.email !== user.email )
              {
                alert("Sai thông tin đăng nhập");
                setUser(user.password === '');
              }
              else if (getAccount.password !== user.password) {
                alert("Sai thông tin đăng nhập");
                setUser(user.password === '');
              }
              else {
                const jsonString = JSON.stringify(getAccount);
                localStorage.setItem("ON_LOGIN", jsonString);
                navigate('/');
              }
          }
  }
  return (
    <div className='container p-3'>
      <div className='d-flex'>
        <div className="card bg-light mb-3 w-100">
          <div className="card-body">
            <label className='mb-4'>Sign In</label>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingPassword" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />
                <label for="floatingPassword">Email</label>
            </div>
            <div class="form-floating">
                <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button onClick={submit} class="btn btn-secondary w-100 mt-3">Sign In</button>
            <div className='mt-3'>Create an account ? <a href='/register'>Sign up</a></div>
          </div>
        </div>
        <div>
          <img src="https://i.pinimg.com/564x/bc/61/9b/bc619b8f350f2edcd0facf61f37d96e9.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage