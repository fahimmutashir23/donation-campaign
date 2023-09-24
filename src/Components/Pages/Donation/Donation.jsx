import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationPage from "../../DonationPage/DonationPage";


const Donation = () => {
  
    const donationData = useLoaderData();
    const [donations , setDonation] = useState([]);


  useEffect(() => {
    const getStore = localStorage.getItem("donation");

    if(getStore.length > 0){
        const donateList = donationData.filter(data => getStore.includes(data.id));
        setDonation(donateList)
    }
  },[donationData])


    return (
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                donations.map((donation, idx) => <DonationPage key={idx} donation = {donation}></DonationPage>)
            }     
        </div>
    );
};

export default Donation;