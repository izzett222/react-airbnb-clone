import star from "../assets/star.svg";
import PropTypes from "prop-types";

export default function Card({tag, ratingReviewer, info, img, amount, rating}) {
  return (
    <div className="max-w-[176px] min-w-[176px]">
      <div className="relative">
        {!!tag && <span className="absolute top-2.5 text-[#222] inline-block px-2.5 py-[5px] bg-white text-xs left-2.5">
          {tag}
        </span>}
        <img alt="" src={img} className="w-full  h-[235px]" />
      </div>
      <div className="text-xs font-light">
        <div className="flex items-center mt-2">
          <img alt="" src={star} className="mr-1" />
          <p>
            {rating} <span className="text-[#918E9B]">{ratingReviewer}</span>
          </p>
        </div>
        <div className="text-xs flex flex-col gap-2 mt-2 font-light">
          <p>{info}</p>
          <p>
            <span className="font-semibold">From ${amount}</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
    tag: PropTypes.string,
    ratingReviewer: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
}
