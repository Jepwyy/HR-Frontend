import React, { useRef } from "react";
import { useState } from "react";
import axios from "../api/api";
import { useMutation } from "react-query";
import { UserAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

// styles
import "../style/login.css";
// images
import logo from "../assets/images/logo.png";
import Spinner from "../components/Spinner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserData, setToken } = UserAuth();
  const navigate = useNavigate();
  const passwordRef = useRef(null);

  const mutation = useMutation({
    mutationFn: (userdetails) =>
      axios.post("/auth/login", userdetails, {
        headers: { "Content-Type": "application/json" },
      }),
    onError: (error) => {
      setErrorMessage(error.response.data.message);
    },
    onSuccess: (data) => {
      setUserData(data.data.user[0]);
      setToken(true);
      navigate("/dashboard");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      username: username,
      password: password,
    });
  };

  const show = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className='md:mx-20'>
        <img src={logo} alt='logo' className='md:h-auto' />
      </div>

      <div className='md:w-1/2 w-80 bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 md:mx-20'>
        <div className='w-full p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl'>
            Login
          </h1>
          <div className='flex justify-center'>
            {mutation.isLoading && <Spinner />}
          </div>
          <form className='space-y-4 md:space-y-5' onSubmit={handleSubmit}>
            <div className='text-black'>{errorMessage}</div>
            <div className=''>
              <label className=' block mb-2 text-sm mr-[80%] font-medium text-gray-900'>
                Username
              </label>
              <input
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   '
                placeholder='Enter Username'
                type='text'
                autoFocus
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className=''>
              <label className=' place-self-start block mb-2 text-sm mr-[80%] font-medium text-gray-900'>
                Password
              </label>
              <input
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   '
                type='password'
                name='password'
                id='password'
                ref={passwordRef}
                placeholder='Enter Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <div className='ml-1 flex items-center h-5'>
                  <input
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    required=''
                    onClick={show}
                  />
                </div>
                <div className='ml-1 text-sm'>
                  <label className='text-gray-500 dark:text-gray-300'>
                    Show Password
                  </label>
                </div>
              </div>
              <a
                href='#'
                className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Forgot password?
              </a>
            </div>
            <button className='bg-blue-600 text-white' type='submit'>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
