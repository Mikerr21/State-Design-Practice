import { useState } from "react";
function Dropdown({ options,onChange,value }) {
  const [isOpen,setIsOpen]=useState(false);

  const handleClick=()=>{
    setIsOpen((currentState)=>!currentState)
  }

  const handleOptionClick=(event)=>{
    setIsOpen(false);
    onChange(event);
  }

  const renderedOptions=options.map((option)=>{
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}>
      {option.label}
    </div>
  })
  return <div>
    <div onClick={handleClick}>{value?.label || 'Select...'}</div>
    {isOpen &&<div>{renderedOptions}</div>}
    </div>;
}

export default Dropdown;
