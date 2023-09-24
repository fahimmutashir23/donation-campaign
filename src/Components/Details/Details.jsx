import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const detailsData = useLoaderData()
    const {id} = useParams()
    const [details, setDetails]= useState([])
    console.log(details.category_image);
    useEffect(()=>{
        const details = detailsData.find(data => data.id == id)
        setDetails(details)

    },[id, detailsData])
    
    return (
        <div>
            <div>
                <div className="relative">
                    <img src={details.category_image} alt="" className="w-full rounded-lg" />
                    <div className="h-32 absolute bottom-0"></div>
                </div>
                <div className="mt-14 mb-6">
                    <h1 className="text-4xl font-bold"></h1>
                </div>
                <div>
                    <p className="text-base font-normal"></p>
                </div>
            </div>
        </div>
    );
};

export default Details;