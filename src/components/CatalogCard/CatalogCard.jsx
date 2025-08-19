import css from './CatalogCard.module.css';
import { Link } from 'react-router-dom';

const CatalogCard = () => {
  return (
    <>
      <div className={css.CatalogCard}>
        <img src="/public/image/picCard.jpg" alt="" />

        <div className={css.CatalogCardInfo}>
          <div className={css.CatalogCardInfoTop}>
            <h3 className={css.CatalogCardInfoTopTitle}>Mavericks</h3>
            <div className={css.CatalogCardInfoTopRight}>
              <p className={css.CatalogCardInfoTopPrice}>€8000.00</p>
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
            <p className={css.CatalogCardReviews}>4.4(2 Reviews)</p>
            <div className={css.locationBox}>
              <svg className={css.IconLocation} width={16} height={16}>
                <use xlinkHref="/icon/sprite.svg#icon-map"></use>
              </svg>
              <p>Kyiv, Ukraine</p>
            </div>
          </div>
          <p className={css.CatalogCardInfoText}>
            Embrace simplicity and freedom with the Mavericks panel truck...
          </p>
          <div />
          <div className={css.CatalogCardInfoOption}>
            <ul className={css.CatalogCardInfoOptionList}>
              <li className={css.CatalogCardInfoOptionItem}>
                <div className={css.CatalogCardInfoOptionBox}>
                  <svg width={20} height={20}>
                    <use href="/icon/sprite.svg#icon-diagram"></use>
                  </svg>
                  <p className={css.CatalogCardInfoOptionBoxTxt}>Automatic</p>
                </div>
              </li>
            </ul>
          </div>
          <Link className={css.CatalogCardInfoBtn} to="/">
            Show more
          </Link>
        </div>
      </div>
    </>
  );
};

export default CatalogCard;
