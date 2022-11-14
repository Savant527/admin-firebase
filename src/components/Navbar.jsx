import React from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { Button } from "./Buttons";
import {Link} from "react-router-dom"

const Navbar = ({ rutas, abrir, setAbrir }) => {
  return (
    <nav className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7"> 
      <Link to={"/"}>
      <div className="flex sm:justify-start text-white font-bold text-2xl cursor-pointer">
        <span className="text-3xl  mr-2 pt-2 pr-2 pl-2 bg-black rounded-full ">
        <HiCurrencyDollar className="h-10 w-10 text-white m-3" />
        </span>
       <p className="m-3"> Ventas</p>
      </div>
      </Link>
      <div onClick={() => setAbrir(!abrir)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={abrir ? 'close' : 'menu'}>
          <button class="flex items-center px-3 py-2 border-2 rounded text-slate-50 border-slate-50 hover:text-slate-400 hover:border-slate-400">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
          </ion-icon>
        </div>
          <div className="flex sm:justify-center content-center w-full">
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${abrir ? 'top-20 z-auto' : 'top-[-490px] md:opacity-100 opacity-0 '}`} >
          
        {rutas.map(([title, url]) => (
          <li>

          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-50 font-medium hover:bg-slate-400 hover:text-slate-900"
          >
            {title}
          </a>
          </li>
        ))}

      <div>
        <Link to={"/login"}>     
        <Button
          clase={
            "bg-slate-50 hover:bg-slate-400 text-black font-bold py-2 px-4 rounded"
          }
          texto={"Inicio Sesión"}
        
        />
        </Link>
      </div>
        </ul>
      </div>


      </div>
     
    </nav>
  );
};

export default Navbar;
