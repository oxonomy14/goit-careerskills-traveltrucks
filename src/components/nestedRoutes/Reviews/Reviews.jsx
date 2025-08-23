import css from "./Reviews.module.css";
import BookingForm from "../../BookingForm/BookingForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchByIdCamper } from "../../../redux/operations";
import { selectCamper} from "../../../redux/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';


const Reviews =() => {
      const { id } = useParams(); // беремо id з URL
    const dispatch = useDispatch();
    const camper = useSelector(selectCamper);

     useEffect(() => {
            if (id) {
                dispatch(fetchByIdCamper(id));
            }
        }, [id, dispatch]);

    return (
         <div className={css.wrapper}>
        <div className={css.reviewsContent}>
<ul className={css.reviewsContentList}>
     {camper.reviews.map((item, index) => (
    <li className={css.reviewsContentItem} key={index}>
        <div className={css.reviewsContentInfo}>
            <div className={css.reviewsContentInfoAvatar}><span>{item.reviewer_name.charAt(0)}</span></div>
            <div className={css.reviewsContentRating}>
                <p className={css.reviewsContentName}>{item.reviewer_name}</p>
<div className={css.stars}>
  {[...Array(5)].map((_, i) => (
    <svg
      key={i}
      width={16}
      height={16}
      className={i < item.reviewer_rating ? css.IconStarFilled : css.IconStarEmpty}
    >
      <use xlinkHref="/icon/sprite.svg#icon-star"></use>
    </svg>
  ))}
</div>
                
            </div>
        </div>
        <p className={css.reviewsContentItemDesc}>{item.comment}</p>
    </li>))}
</ul>
        </div>
        <div className={css.bookingForm}>
            <BookingForm/>
        </div>
    </div>
    );

};

export default Reviews;