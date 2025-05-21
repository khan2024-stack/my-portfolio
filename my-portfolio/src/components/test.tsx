'use client';

import { useState } from "react";
export default function DebugScreen() {

  const [input , setInput] = useState('')

const handleChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
  const val = e.target.value;
    setInput(val)
    console.log('test input value',val)

}

  return (
    <div className="bg-gray-800 text-white text-xs px-2 py-1 ">
      <input type="text"  value={input}   onChange={handleChange}
              className="bg-gray-700 px-2 py-1 rounded" // Added some styling
      />
      <p className="mt-2">You're typing: {input}</p>

    </div>
  );
}
