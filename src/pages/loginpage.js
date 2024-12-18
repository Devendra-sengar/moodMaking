import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../redux/api/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/reducers/userreducer';
import toast from 'react-hot-toast';
import Loader from '../components/loader';

const NewLogin = () => {
  const dispatch =useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('photo', data.photo[0]); 
  
    try {
      const result = await login(formData).unwrap();
  toast.success("Login successfully");
      dispatch(setUser(result));
      navigate('/modes', { replace: true });   
    } catch (error) {
      // toast.error(`Error during login: ${error.data.message}`);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Log In</h2>

        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <div>
            <input type="file" name="photo" {...register('photo')} />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? <Loader></Loader> : 'Log In'}
          </button>

          {/* Display error message */}
          {error && <p className="text-red-500 text-sm mt-2">Login failed. Please try again.</p>}
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <NavLink to="/forgot-password" className="text-indigo-500 hover:text-indigo-700 transition duration-300">Forgot Password?</NavLink>
        </div>

        {/* Redirect to Signup */}
        <div className="text-center mt-6 text-gray-500">
          Don't have an account? <NavLink to="/signup" className="text-indigo-500">Sign up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewLogin;
