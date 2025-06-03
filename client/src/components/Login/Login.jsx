import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaCheckCircle, FaEye, FaEyeSlash, FaLock, FaUser, FaUserPlus } from 'react-icons/fa'
import { inputBase, iconClass } from '../../assets/dummydata';
import { Link } from 'react-router-dom';

const Login = ({ onLoginSuccess, onClose }) => {

  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '', rememberMe: false });


  useEffect(() => {
    const stored = localStorage.getItem('loginData');
    if (stored) setFormData(JSON.parse(stored));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.rememberMe ? localStorage.setItem('loginData', JSON.stringify(formData))
      : localStorage.removeItem('loginData');
    setShowToast(true);
    setTimeout(() => {
      onLoginSuccess();
      setShowToast(false);
    }, 3000);

  }

  const handleChange = ({ target: { name, value, type, checked } }) =>
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <div className=' space-y-6 relative '>
      <div className={` fixed bottom-4 right-4 z-50 transition-all duration-300 
        ${showToast ? 'translate-y-0 opacity-100' : ' -translate-y-20 opacity-0'}`}>
        <div className=' bg-green-600 text-white px-4 py-3 rounded-md shadow-lg flex items-center 
         text-sm gap-2 '>
          <FaCheckCircle className=' flex-shrink-0 ' />
          <span>Login SuccessFull </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}
        className=' space-y-6 ' >
        <div className=' relative'>
          <FaUser className={iconClass} />
          <input type="text" name='username' placeholder='Username' value={formData.username}
            onChange={handleChange} className={`${inputBase} pl-10 pr-4 py-3`} />
        </div>
        <div className=' relative'>
          <FaLock className={iconClass} />
          <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' value={formData.password}
            onChange={handleChange} className={`${inputBase} pl-10 pr-4 py-3`} />
          <button type='button' onClick={toggleShowPassword} className=' absolute right-3 top-1/2 transform -translate-y-1/2
             text-amber-400  ' >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className=' flex items-center '>
          {/* <label className=' flex items-center gap-3 text-amber-100 text-sm sm:text-base cursor-pointer select-none'>
            <input 
            type="checkbox" 
            name="rememberMe" 
            checked={formData.rememberMe} 
            onChange={handleChange}
            className=' form-checkbox h-5 w-5 text-amber-600 bg-[#2d1b0e] border-amber-400 rounded focus:ring-amber-600' />
            <span className=' ml-2 text-amber-100 '>
              Remember Me
            </span>
          </label> */}
          <label className="flex items-center gap-3 text-amber-100 text-sm sm:text-base cursor-pointer select-none">
            <div className="relative">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="peer appearance-none h-5 w-5 border-2 border-amber-400 rounded bg-[#2d1b0e] checked:bg-amber-600 checked:border-transparent transition duration-200"
              />
              {/* Checkmark icon shown only when checked */}
              <svg
                className="w-4 h-4 text-white absolute top-[2px] left-[2px] opacity-0 peer-checked:opacity-100 transition-opacity duration-150 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <span className="transition-colors duration-200 peer-hover:text-amber-300">
              Remember Me
            </span>
          </label>
        </div>
        <button className=' w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-[#2d1b0e] font-bold
         rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform'>
          Sign In <FaArrowRight />
        </button>
      </form>

      <div className=' text-center'>
        <Link to='/signup' onClick={onClose} className=' inline-flex items-center gap-2 
       text-amber-400 hover:text-amber-600 transition-colors ' >
          <FaUserPlus /> Create New Account
        </Link>
      </div>
    </div>
  )
}

export default Login