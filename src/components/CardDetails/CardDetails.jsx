import css from "./CardDetails.module.css";
import Slider from '../../components/Slider/Slider';
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const CardDetails = ({ camper }) => {
    const location = useLocation();
    //console.log(location);
    const backLink = useRef(location.state ?? "/catalog");

    return (
        <>
            <div className={css.Card}>
                <div className={css.CardInfoBox}>
                    <div className={css.CardInfo}>
                        <h3 className={css.CardInfoTopTitle}>{camper.name}</h3>
                        <div className={css.CardInfoSub}>
                            <svg width={16} height={16} className={css.IconStar}>
                                <use xlinkHref="/icon/sprite.svg#icon-star"></use>
                            </svg>
                            <p className={css.CardReviews}>{camper.rating}({camper.reviews.length} Reviews)</p>
                            <div className={css.locationBox}>
                                <svg className={css.IconLocation} width={16} height={16}>
                                    <use xlinkHref="/icon/sprite.svg#icon-map"></use>
                                </svg>
                                <p>{camper.location}</p>
                            </div>
                        </div>
                        <p className={css.CardInfoPrice}>€{camper.price.toFixed(2)}</p>
                    </div>
                    <div className={css.btnBack}>
                        <Link className={css.btnLinkBack} to={backLink.current}>Go Back</Link></div>
                </div>
                <div className={css.slider}>
                    <Slider camper={camper} />
                </div>
                <p className={css.CardInfoDesc}>{camper.description}</p>
            </div>
        </>
    )

};

export default CardDetails;