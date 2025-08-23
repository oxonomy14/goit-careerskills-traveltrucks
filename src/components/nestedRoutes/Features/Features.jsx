import css from "./Features.module.css";
import BookingForm from "../../BookingForm/BookingForm";
import CamperFeatures from "../../CamperFeatures/CamperFeatures";
import { useDispatch, useSelector } from "react-redux";
import { fetchByIdCamper } from "../../../redux/operations";
import { selectCamper} from "../../../redux/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const Features =() => {
    const { id } = useParams(); // беремо id з URL
    const dispatch = useDispatch();
    const camper = useSelector(selectCamper);

     useEffect(() => {
            if (id) {
                dispatch(fetchByIdCamper(id));
            }
        }, [id, dispatch]);

    return (<>
    <div className={css.wrapper}>
        <div className={css.featuresContent}>
            <div className={css.camperFeatures}>
            <CamperFeatures item={camper}/>
            </div>
            <div>
             
                    <h3 className={css.featuresTitle}>Vehicle details</h3>
             
                <div className={css.featuresBox}>
                    <ul className={css.featuresBoxList}>
                        <li className={css.featuresBoxItem}> 
                            <span>Form</span>
                        <span>{camper.form}</span>
                        </li>
                            <li className={css.featuresBoxItem}> 
                            <span>Length</span>
                        <span>{camper.length}</span>
                        </li>
                           <li className={css.featuresBoxItem}> 
                            <span>Width</span>
                        <span>{camper.width}</span>
                        </li>
                         <li className={css.featuresBoxItem}> 
                            <span>Height</span>
                        <span>{camper.height}</span>
                        </li>
                           <li className={css.featuresBoxItem}> 
                            <span>Tank</span>
                        <span>{camper.tank}</span>
                        </li>
                        <li className={css.featuresBoxItem}> 
                            <span>Consumption</span>
                        <span>{camper.consumption}</span>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <div className={css.bookingForm}>
            <BookingForm/>
        </div>
    </div>
    
    </>);

};

export default Features;