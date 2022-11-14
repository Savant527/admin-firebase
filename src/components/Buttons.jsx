import React from "react";

export const Button = ({texto,tipo,clase="",click}) => {
  return (
   <>
    <button type={tipo} className={clase} onClick={click}>
      {texto}
    </button>
   </>
  );
};
