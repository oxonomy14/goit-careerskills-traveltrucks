import css from './SideBar.module.css';

const SideBar = () => {
  return (
    <>
      <div className={css.wrapper}>
<form className=''>
        <div className={css.location}>
          <p>Location</p>
          <div className={css.locationBox}>
            <svg className={css.IconLocation}>
              <use href="/icon/sprite.svg#icon-map"></use>
            </svg>
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
        <div className={css.FiltersBox}>
          <p className={css.FiltersBoxTitle}>Filters</p>

          </div>
            <p className={css.FiltersFormTitle}>Vehicle equipment</p>
            <div className={css.FiltersFormVehicleEquipment}>
              <label htmlFor="ac">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="VehicleFilters"
                  value="ac"
                  id="ac"
                />
                <div className={css.FiltersCheck}>
                  <svg width={32} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-wind"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>AC</p>
                </div>
              </label>
              <label htmlFor="automatic">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="VehicleFilters"
                  value="automatic"
                  id="automatic"
                />
                <div className={css.FiltersCheck}>
                  <svg width={32} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-diagram"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Automatic</p>
                </div>
              </label>
              <label htmlFor="kitchen">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="VehicleFilters"
                  value="kitchen"
                  id="kitchen"
                />
                <div className={css.FiltersCheck}>
                  <svg width={33} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-cup-hot"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Kitchen</p>
                </div>
              </label>
              <label htmlFor="tv">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="VehicleFilters"
                  value="tv"
                  id="tv"
                />
                <div className={css.FiltersCheck}>
                  <svg width={33} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-tv"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>TV</p>
                </div>
              </label>
              <label htmlFor="bathroom">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="VehicleFilters"
                  value="bathroom"
                  id="bathroom"
                />
                <div className={css.FiltersCheck}>
                  <svg width={33} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-shower"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Bathroom</p>
                </div>
              </label>
            </div>
            <p className={css.FiltersFormTitle}>Vehicle type</p>
            <div className={css.FiltersFormVehicleType}>
              <label htmlFor="van">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="VehicleFilters"
                  value="van"
                  id="van"
                />
                <div className={css.FiltersCheck}>
                  <svg width={32} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-van"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Van</p>
                </div>
              </label>
              <label htmlFor="fully">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="VehicleFilters"
                  value="fully"
                  id="fully"
                />
                <div className={css.FiltersCheck}>
                  <svg width={32} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-fully"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Fully Integrated</p>
                </div>
              </label>
              <label htmlFor="alcove">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="VehicleFilters"
                  value="alcove"
                  id="alcove"
                />
                <div className={css.FiltersCheck}>
                  <svg width={33} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-alcove"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Alcove</p>
                </div>
              </label>
            </div>
            <button type="submit" className={css.FiltersFormButton}>
              Search
            </button>
          </form>
        </div>
    
    </>
  );
};

export default SideBar;
