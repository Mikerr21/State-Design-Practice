import { useState } from "react";
function Dropdown({ options,onSelect,selection }) {
  const [isOpen,setIsOpen]=useState(false);

  const handleClick=()=>{
    setIsOpen((currentState)=>!currentState)
  }

  const handleOptionClick=(event)=>{
    setIsOpen(false);
    onSelect(event);
  }

  const renderedOptions=options.map((option)=>{
    return <div onClick={()=>handleOptionClick(option)} key={option.value}>
      {option.label}
    </div>
  })
  return <div>
    <div onClick={handleClick}>{selection.label? || 'Select...'}</div>
    {isOpen &&<div>{renderedOptions}</div>}
    </div>;
}

export default Dropdown;
