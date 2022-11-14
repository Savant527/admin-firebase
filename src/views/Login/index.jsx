import React from 'react'
import { Button } from '../../components/Buttons';
export const Login = () => {
  return (
    <div className=' grid text-center items-center mt-20 h-screen w-full'>
    <div className='flex justify-center items-center'>
        <form className=' shadow-2xl shadow-black  p-6 rounded-xl m-4 w-full sm:w-96'>
            <h2 className='text-3xl text-black font-bold text-center uppercase pb-8' >INICIAR SESIÓN</h2>
            <div className='flex flex-col text-slate-800 pb-5'>
                <label className='font-semibold' >Usuario:</label>
                <input className='border-b-2 border-slate-900 focus:border-slate-400 focus:outline-none p-2' type="text" />
            </div>
            <div className='flex flex-col text-slate-800 pb-5'>
                <label className='font-semibold' >Contraseña:</label>
                <input className='border-b-2 border-slate-900 focus:border-slate-400 focus:outline-none p-2' type="password" />
            </div>
            <div className='flex justify-center my-4'>
                <p className='flex items-center text-sm'><input className='mr-2 accent-slate-500' type="checkbox" />Recordar Contraseña</p>
            </div>
            <div className='flex justify-center items-center'>
                <Button texto={"Ingresar"} clase={"bg-slate-900 p-1 rounded-xl px-2 text-white hover:bg-slate-500 font-semibold"} />
            </div>
        </form>
    </div>
</div>
  )
}
