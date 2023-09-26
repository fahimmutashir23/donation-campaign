import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationPage = ({ donation }) => {
  const {
    title,
    category_image,
    category,
    Color_category_bg,
    color_card_bg,
    color_text_and_button_bg,
    donation_price,
    id
  } = donation;

  return (
    <div>
      <div className="card card-side shadow-xl" style={{backgroundColor: color_card_bg}}>
        <figure>
          <img src={category_image} alt="" />
        </figure>
        <div className="py-6 pl-6 space-y-3">
          <h2
            className="text-sm font-medium rounded-md py-1 px-2 max-w-min"
            style={{
              backgroundColor: Color_category_bg,
              color: color_text_and_button_bg,
            }}
          >
            {category}
          </h2>
         <div>
         <h2
            className="text-xl font-semibold text-black"

          >
            {title}
          </h2>
          <p className="text-base font-semibold" style={{color: color_text_and_button_bg}}>${donation_price}</p>
         </div>

          <Link className="btn btn-sm border-none text-white" style={{backgroundColor: color_text_and_button_bg}} to={`/details/${id}`}>
          View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

DonationPage.propTypes = {
  donation: PropTypes.object,
};

export default DonationPage;
