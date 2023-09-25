import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SearchItem = ({input}) => {

    const {  title,
        category_image,
        category,
        Color_category_bg,
        color_card_bg,
        color_text_and_button_bg,
        id} = input

    return (
        <div>
        <Link to={`/details/${id}`}>
              <div className="card shadow-xl" style={{backgroundColor: color_card_bg}}>
                  <figure>
                  <img
                      src={category_image}
                      alt="Shoes"
                  />
                  </figure>
                  <div className="p-4">
                  <h2 className="text-sm font-medium rounded-md py-1 px-2 max-w-min" style={{backgroundColor: Color_category_bg,
                  color: color_text_and_button_bg
                  }}>{category}</h2>
                  <h2 className="text-xl font-semibold" style={{color: color_text_and_button_bg}}>{title}</h2>
                  </div>
              </div>
        </Link>
      </div>
    );
};

SearchItem.propTypes = {
    input: PropTypes.object
};

export default SearchItem;