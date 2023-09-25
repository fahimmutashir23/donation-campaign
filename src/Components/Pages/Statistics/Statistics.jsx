import { useEffect, useState } from "react";
import  Chart  from "react-apexcharts";
import { getLocalStorage } from "../../../LocalStorage/storage";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {

    const datas = useLoaderData();
    const [statisticsData, setStatisticsData] = useState([]);
  console.log(statisticsData.length);
  console.log(datas.length)

    useEffect(()=>{
      const storeData = getLocalStorage();
      const findData = datas.filter(data => storeData.includes(data.id));
      setStatisticsData(findData)

    },[datas])

    return (
        <div className="flex justify-center mt-14">
            <Chart
                type="pie"
                width={1250}
                height={500}
                
                series={[statisticsData.length, datas.length]}              

                options={{ 
                  noData:{text:"Empty Data"},                        
                  colors:["#00C49F","#FF444A"],
                  labels: ['Your Donation', 'Total donation']
           }}
                >
                </Chart>
        </div>
    );
};

export default Statistics;