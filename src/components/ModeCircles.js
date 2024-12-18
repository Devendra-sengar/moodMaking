// src/ModeCircles.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../redux/api/userApi';
import { userlogout } from '../redux/reducers/userreducer';
import { useDispatch } from 'react-redux';

const ModeCircles = () => {
   const navigate = useNavigate();
     function clickHandler(e){
      console.log(e.target.id)
     navigate(`/${e.target.id}`);
     }

     const dispatch = useDispatch()
   
     const [logout] = useLogoutMutation();
     const handler=async ()=>{
       await logout();
       localStorage.removeItem('token');
       dispatch(userlogout());
       navigate('/');
     }
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen">
      {/* Mode Circles */}
      <button className='absolute right-14 top-7 text-white font-semibold text-2xl hover:cursor-pointer p-3 bg-blue-700 rounded-md' onClick={handler}>
        Logout
      </button>
      <div className="flex gap-8">
        <div id="normal" onClick={clickHandler} className="flex justify-center items-center w-32 h-32 rounded-full bg-teal-400 text-white font-bold text-center cursor-pointer transform hover:scale-110 transition-transform">
          Normal
        </div>
        <div id="sad" onClick={clickHandler} className="flex justify-center items-center w-32 h-32 rounded-full bg-orange-600 text-white font-bold text-center cursor-pointer transform hover:scale-110 transition-transform">
          Sad
        </div>
        <div id="angry" onClick={clickHandler} className="flex justify-center items-center w-32 h-32 rounded-full bg-red-700 text-white font-bold text-center cursor-pointer transform hover:scale-110 transition-transform">
          Angry
        </div>
      </div>

      {/* Breathing Guide */}
      <div className="mt-10 text-white text-lg font-light text-center animate-pulse">
        Breathe In... Breathe Out...
      </div>
    </div>
  );
};

export default ModeCircles;
