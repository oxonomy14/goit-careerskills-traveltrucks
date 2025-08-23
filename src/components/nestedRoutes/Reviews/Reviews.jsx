import css from "./Reviews.module.css";
import BookingForm from "../../BookingForm/BookingForm";


const Reviews =() => {

    return (
        <>  <div className={css.wrapper}>
        <div className={css.reviewsContent}></div>
        <div className={css.bookingForm}>
            <BookingForm/>
        </div>
    </div></>
    );

};

export default Reviews;