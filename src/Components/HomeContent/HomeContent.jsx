
import { useEffect, useState } from "react";
import SearchItem from "../SearchItem/SearchItem";
import PropTypes from 'prop-types';


const HomeContent = ({ inputData, datas }) => {

  const [input, setInput] = useState([]);


  useEffect(() => {

    const filterData = datas.filter((data) => data.category.toLowerCase() == inputData);

    if(filterData.length > 0){
      setInput(filterData);
    }
    else{
      setInput(datas)
    }

  }, [datas, inputData]);

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-3 lg:grid-cols-4 gap-6 mt-24">
        {input.map((data) => (
          <SearchItem key={data.id} input={data}></SearchItem>
        ))}
      </div>

    </div>
  );
};

HomeContent.propTypes = {
  inputData: PropTypes.array,
  datas: PropTypes.array
};

export default HomeContent;
