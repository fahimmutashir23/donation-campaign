import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationPage from "../../DonationPage/DonationPage";

const Donation = () => {
  const donationData = useLoaderData();
  const [donations, setDonation] = useState([]);
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const getStore = localStorage.getItem("donation");

    if (getStore.length > 0) {
      const donateList = donationData.filter((data) => getStore.includes(data.id));
      setDonation(donateList);
    }
  }, [donationData]);


  return (
    <div>
      <div className="mt-14 px-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {
            isShow?
            donations.map((donation, idx) => (
              <DonationPage key={idx} donation={donation}></DonationPage>
            )):
            donations.slice(0, 4).map((donation, idx) => (
              <DonationPage key={idx} donation={donation}></DonationPage>
            ))
        }
      </div>
      {
        donations.length > 4 ? <div className={`flex justify-center mt-3 ${isShow? "hidden": ""}`}>
        <button onClick={() => setIsShow(!isShow)} className="btn mt-7">See more</button>
        </div> :
        ""
      }
    </div>
  );
};

export default Donation;
