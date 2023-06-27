import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { GiPerson } from "react-icons/gi";
const Main = () => {
  const { data } = useContext(AppContext);
  let difficulty  = '';
  if(data.accessibility*10 < 3){
    difficulty = "Easy Peasy 🍰"
  }else if(data.accessibility*10 < 6 ){
    difficulty = 'You can do it 💪'
  }else{
    difficulty = 'Gotta think twice 💀'
  }
  const renderPersonIcons = () => {
    const icons = [];

    for (let i = 0; i < data.participants; i++) {
      icons.push(<GiPerson key={i}  className="font-bold text-lg text-red-500 inline"/>);
    }

    return icons;
  };
  return (
    <div className="container mx-auto w-full lg:w-1/2 p-8 flex flex-col justify-center ">
      <h1 className="text-center animate-pulse bg-red-600 mx-auto lg:w-full text-white rounded-md inline-block p-2 lg:w-2/4 w-full text-lg  font-bold">
        {data.activity}
      </h1>

      <label htmlFor="accessibility" className="my-5 text-red-700 font-bold text-lg text-center">How Easy to Do : {difficulty}</label>

      <meter
        id="accessibility"
        className="meterStyles"
        
        min="0"
        max="1"
        low="0.33"
        high="0.66"
        optimum="0.8"
        value={data.accessibility}
      >
        {data.accessibility}/1
      </meter>
    
      <h1 className="text-red-700 font-bold text-center my-5 rounded-md inline-block p-2  ">
        {data.participants < 2 ? "You can do it alone!!" : <> Participants Needed : {data.participants}{renderPersonIcons()}</>}
       
      </h1>
      <h1 className="text-red-700 font-bold text-center my-5 rounded-md inline-block p-2  ">
        {data.price*10 < 1 ? "It is free!" : `It might cost you : ${data.price * 10} in a scale of 10`}
        
      </h1>
      <meter
        id="accessibility"
        className="meterStyles"
        
        min="0"
        max="1"
        low="0.33"
        high="0.66"
        optimum="0.8"
        value={data.price}
      >
      
      </meter>
    </div>
  );
};

export default Main;
