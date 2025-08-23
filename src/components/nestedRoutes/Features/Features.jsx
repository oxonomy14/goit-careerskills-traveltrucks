import css from "./Features.module.css";
import BookingForm from "../../BookingForm/BookingForm";

const Features =() => {

    return (<>
    <div className={css.wrapper}>
        <div className={css.featuresContent}></div>
        <div className={css.bookingForm}>
            <BookingForm/>
        </div>
    </div>
    
    </>);

};

export default Features;