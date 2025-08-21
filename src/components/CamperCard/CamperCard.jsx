import css from './CamperCard.module.css';
import { Link } from 'react-router-dom';
import CamperFeatures from "../CamperFeatures/CamperFeatures";

const CamperCard = ({ item }) => {
  return (
    <>
      <div className={css.CatalogCard}>
        <img className={css.CatalogCardImage} src={item.gallery[0].thumb} alt={item.name} />

        <div className={css.CatalogCardInfo}>
          <div className={css.CatalogCardInfoTop}>
            <h3 className={css.CatalogCardInfoTopTitle}>{item.name}</h3>
            <div className={css.CatalogCardInfoTopRight}>
              <p className={css.CatalogCardInfoTopPrice}>{item.price.toFixed(2)}</p>
              <button type="button">
                <svg width={26} height={24}>
                  <use href="/icon/sprite.svg#icon-heart"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className={css.CatalogCardInfoSub}>
            <svg width={16} height={16} className={css.IconStar}>
              <use xlinkHref="/icon/sprite.svg#icon-star"></use>
            </svg>
            <p className={css.CatalogCardReviews}>{item.rating}({item.reviews.length} Reviews)</p>
            <div className={css.locationBox}>
              <svg className={css.IconLocation} width={16} height={16}>
                <use xlinkHref="/icon/sprite.svg#icon-map"></use>
              </svg>
              <p>{item.location}</p>
            </div>
          </div>
          <p className={css.CatalogCardInfoText}>
            {item.description}
          </p>
          <div />         
          <CamperFeatures item={item}/>
          <Link className={css.CatalogCardInfoBtn} to="`/catalog/${item.id}`">
            Show more
          </Link>
        </div>
      </div>
    </>
  );
};

export default CamperCard;
