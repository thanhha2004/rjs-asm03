import React, { useEffect, useState }from 'react'
import { useNavigate } from 'react-router-dom';


function RegisterPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    phone: ''
  });
  const submit = () => {
    debugger
    const storedUser = localStorage.getItem('userData');
    var arrUser = [];
    if ( storedUser !== null) {
      var getData = JSON.parse(storedUser)
      if (Array.isArray(getData))
        {
          getData.forEach((e) => {
            arrUser.push(e);
          })
        }
    }
    if (user.password.length < 8)
      {
        alert("Mật khẩu được để ít hơn 8 ký tự");
      }
    else if (user.username.length <= 0)
      {
        alert("Tên không được để trống");
      }
    else if (user.email.length <= 0) 
      {
        alert("Email không được để trống");
      }
      else if (user.phone.length <= 0)
        {
          alert("Số điện thoại không được để trống");
        }
        else if ( arrUser.length > 0){
          const filEmail = arrUser.find(x => x.email === user.email)
          if (filEmail)
            {
              if (filEmail.email === user.email)
                {
                  alert("Email đã tồn tại");
                }
                else {
                  arrUser.push(user)
                  const jsonString = JSON.stringify(arrUser);
                  localStorage.clear();
                  localStorage.setItem("userData", jsonString);
                  navigate('/login');
                }
            }
            else {
              arrUser.push(user)
              const jsonString = JSON.stringify(arrUser);
              localStorage.clear();
              localStorage.setItem("userData", jsonString);
              navigate('/login');
            }
        }
        else {
          arrUser.push(user)
          const jsonString = JSON.stringify(arrUser);
          localStorage.setItem("userData", jsonString);
          navigate('/login');
        }
  }
  return (
    <div className='container p-3'>
      <div className='d-flex'>
        <div className="card bg-light mb-3 w-100">
          <div className="card-body">
            <label className='mb-4'>Sign Up</label>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="Name" />
                <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingPassword" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />
                <label for="floatingPassword">Email</label>
            </div>
            <div class="form-floating">
                <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPassword" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} placeholder="Phone" />
                <label for="floatingPassword">Phone</label>
            </div>
            <button onClick={submit} class="btn btn-secondary w-100 mt-3">Sign Up</button>
            <div className='mt-3'>Login ? <a href='/login'>Click</a></div>
          </div>
        </div>
        <div>
          <img src="https://i.pinimg.com/564x/bc/61/9b/bc619b8f350f2edcd0facf61f37d96e9.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage