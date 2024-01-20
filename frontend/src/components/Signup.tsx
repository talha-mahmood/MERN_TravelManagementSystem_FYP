import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: null,
    email: null,
    password: null
  })
  useEffect(() => {
    localStorage.getItem("user") && navigate("/")
  }, [])
  function register() {
    fetch("http://localhost:4000/signup", {
      method: "post",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(state)
    }).then((resp) => {
      resp.json().then((result) => {
        if (result.name) {
          if (result.name == "admin") {
            alert("signup success")
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/admin')
          }
          alert("signup success")
          localStorage.setItem('user', JSON.stringify(result))
          navigate('/')

        } else {
          alert(result.result)
        }


      })
    })
  }
  return (
    <div>
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <div className="max-w-md mx-auto">
          <input  type='text' placeholder='Enter Name'
            onChange={(event) => setState((prevState: any) => ({ ...prevState, name: event.target.value }))}></input>
          <input  type='text' placeholder='Enter Email' onChange={(event) => setState((prevState: any) => ({ ...prevState, email: event.target.value }))}></input>
          <input  type='text' placeholder='Enter Password' onChange={(event) => setState((prevState: any) => ({ ...prevState, password: event.target.value }))}></input>
          <button className='primary' onClick={() => register()}>Sign up</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
export default Signup;