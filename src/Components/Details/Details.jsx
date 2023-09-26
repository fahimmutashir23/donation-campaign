import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import 'animate.css';
import { saveLocalStorage } from "../../LocalStorage/storage";

const Details = () => {
  const detailsData = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const details = detailsData.find((data) => data.id == id);
    setDetails(details);
  }, [id, detailsData]);

  const handleDonate = (id) => {
    saveLocalStorage(id)

    Swal.fire({
      title: 'Well done!!! You are successfully donating',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  };

  return (
    <div>
      <div>
        <div className="relative mt-14 rounded-xl">
          <div>
            <img src={details.category_image} alt="" className="w-full" />
          </div>
          <div className="h-32 w-full bg-opacity-40 bg-black absolute bottom-0">
            <button
              onClick={() => handleDonate(details.id)}
              className="btn my-9 ml-9"
              style={{
                backgroundColor: details.color_text_and_button_bg,
                color: details.color_card_bg,
              }}
            >
              Donate ${details.donation_price}
            </button>
          </div>
        </div>
        <div className="mt-14 mb-6">
          <h1 className="text-4xl font-bold">{details.title}</h1>
        </div>
        <div>
          <p className="text-base font-normal">{details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
