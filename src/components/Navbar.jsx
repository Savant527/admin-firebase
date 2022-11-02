import React from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { Button } from "./Buttons";

const Navbar = ({ rutas }) => {
  return (
    <nav className="flex space-x-5 shadow-md w-full fixed top-0 left-0 bg-black p-5">
      <div className="flex sm:justify-start">
        <HiCurrencyDollar className="h-10 w-10 text-white" />
      </div>

      <div className="flex sm:justify-center content-center w-full">
        {rutas.map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-50 font-medium hover:bg-slate-400 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </div>
      <div className="flex sm:justify-end ">
        <Button
          clase={
            "bg-slate-50 hover:bg-slate-400 text-black font-bold py-2 px-4 rounded"
          }
          texto={"Volver"}
        
        />
      </div>
      <div class="flex lg:hidden content-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
