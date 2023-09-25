
import { useState } from "react";
import HomeContent from "../HomeContent/HomeContent";
import PropTypes from 'prop-types';



const Banar = ({datas}) => {

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

      <div>
          <HomeContent inputData={input} datas={datas}></HomeContent>
      </div>
    </div>
  );
};

Banar.propTypes = {
  datas: PropTypes.array
};

export default Banar;
