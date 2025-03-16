import React from 'react';


export default function RandomizeColor() {


  const handleSecClick=(e)=>{
    console.log(e.target);
    
    console.log(getRandomColor())
    let body= document.querySelector("body");
    body.style.background=getRandomColor();
    e.target.style.backgroundColor=getRandomColor();
  }

  function getRandomColor(){
    let letters="0123456789ABCDEF";
    let color="#";
    for (let i=0;i<6;i++){
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }
  return (
    <div> 
      <h1>Randomize color</h1>
     
      <button className="button button1" onClick={handleSecClick} >click me
      </button>

      
     
    </div>
 
  )
}
