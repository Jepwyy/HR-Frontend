import React from "react";
const Topbar = (props) => {
  return (
    <div className='bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between'>
      <button onClick={props.tangina}>test</button>
      <div className=''>tete</div>
    </div>
  );
};

export default Topbar;
