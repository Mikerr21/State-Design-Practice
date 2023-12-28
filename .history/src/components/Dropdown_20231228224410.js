import { useState,useEffect,useRef } from "react";
import {GoChevronDown} from "react-icons/go"
import Panel from "./Panel";

function Dropdown({ options,onChange,value }) {
  const [isOpen,setIsOpen]=useState(false);

  const divEl=useRef();

  useEffect(()=>{
    const handler=(event)=>{
      console.log(divEl.current)
    }

    document.addEventListener("click",handler,true);
    return ()=>{
      document.removeEventListener('click',handler);
    }
  },[])

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
  return <div ref={divEl} className="w-48 relative">
    <Panel 
    className="flex justify-between items-center cursor-pointer" 
    onClick={handleClick}
    >
      {value?.label || 'Select...'}
      <GoChevronDown className="text-lg"/>
    </Panel>
    {isOpen &&
    <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>    ;
}

export default Dropdown;
