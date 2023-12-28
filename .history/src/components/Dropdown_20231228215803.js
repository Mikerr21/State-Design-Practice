import { useState } from "react";
function Dropdown({ options }) {
  const [isOpen,setIsOpen]=useState(false);
  const renderedOptions=options.map((option)=>{
    return <div key={option.value}>
      {option.label}
    </div>
  })
  return <div>
    <div>Select...</div>
    <div>{renderedOptions}</div>
    </div>;
}

export default Dropdown;
