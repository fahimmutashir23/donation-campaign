// import { useEffect, useState } from "react";
// import SearchItem from "../SearchItem/SearchItem";

import { useState } from "react";
import HomeContent from "../HomeContent/HomeContent";



const Banar = () => {

  // const [allData, setAllData] = useState([])
  // const [input, setInput] = useState([]);
  


  // useEffect(()=>{
  //   fetch("/public/data.json")
  //   .then(res=> res.json())
  //   .then(data => setAllData(data))
  // },[])
  const [input , setInput] = useState([])

  const handleInput = e =>{
      e.preventDefault()
      const inputData = e.target.search.value
      setInput(inputData.toLowerCase())
  }


  return (
    <div className="">
      <div
        className="hero h-96 "
        style={{
          backgroundImage: "url(/src/assets/banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
            <div className="form-control">
              <div className="">
                <form onSubmit={handleInput} className="input-group text-black mt-10 flex justify-center">
                <input
                  type="text"
                  placeholder="Search here…"
                  name="search"
                  className="input input-bordered w-2/3"
                />
                <input 
                type="submit" 
                value="Search" 
                className="btn bg-red-700 text-white hover:bg-red-500 font-semibold"
                 />
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24">
          {
            input.map(data => <SearchItem key={data.id} input ={data}></SearchItem>)
          }
      </div> */}
      <div>
          <HomeContent inputData={input}></HomeContent>
      </div>
    </div>
  );
};

export default Banar;
