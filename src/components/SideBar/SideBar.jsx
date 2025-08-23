import css from './SideBar.module.css';
import { useState, useEffect } from 'react';
import axios from '../../services/api';

const SideBar = ({onFilterChange}) => {
   // локальний state для фільтрів
  const [filters, setFilters] = useState({
    location: '',   
    form: '',
    transmission: '',      
    AC: false,      
    kitchen: false, 
    TV: false,      
    bathroom: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water:false,
  });

  const [locations, setLocations] = useState([]);

  // Завантаження доступних локацій з бекенду
  useEffect(() => {
  const fetchLocations = async () => {
  try {
    const response = await axios.get("/campers");
    
    // тут уже response.data.items
    const uniqueLocations = [...new Set(response.data.items.map(c => c.location))].sort();
    setLocations(uniqueLocations);
  } catch (error) {
    console.error("Error fetching locations:", error);
  }
};
    fetchLocations();
  }, []);

   // Обробка зміни чекбокса / input
  const handleChange = e => {
    const { name, type, checked, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Обробка зміни transmission
  const handleTransmissionChange = () => {
    setFilters(prev => ({
      ...prev,
      transmission: prev.transmission === 'automatic' ? '' : 'automatic',
    }));
  };

  const handleFormChange = e => {
    setFilters(prev => ({
      ...prev,
      form: e.target.value,
    }));
  };

  // Сабміт форми
  const handleSubmit = e => {
    e.preventDefault();

    const queryParams = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (typeof value === 'boolean' && value) queryParams[key] = true;
      if (typeof value === 'string' && value) queryParams[key] = value;
    });

    onFilterChange(queryParams);
  };

  return (
    <>
      <div className={css.wrapper}>
<form className={css.form} onSubmit={handleSubmit}>
             <div className={css.location}>
          <p>Location</p>
          <div className={css.inputWrapper}>
                  <svg className={css.iconLocation} width={20} height={20}>
              <use href="/icon/sprite.svg#icon-map"></use>
            </svg>
          <input 
          className={css.locationInput}
            type="text"
            name="location"
             list="locations"
            value={filters.location}
            onChange={handleChange}
            placeholder="City"
            
          />
           <datalist id="locations">
              {locations.map(loc => (
                <option key={loc} value={loc} />
              ))}
            </datalist>
          </div>
        </div>
        <div className={css.FiltersBox}>
          <p className={css.FiltersBoxTitle}>Filters</p>

          </div>
            <p className={css.FiltersFormTitle}>Vehicle equipment</p>
            <div className={css.FiltersFormVehicleEquipment}>
              <label htmlFor="AC">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                 
                  name="AC"
                  id="AC"
                  onChange={handleChange}
                   checked={filters.AC}
                />
                <div className={css.FiltersCheck}>
                  <svg width={32} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-wind"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>AC</p>
                </div>
              </label>
              <label htmlFor="transmission">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="transmission"                  
                  id="transmission"
                 onChange={handleTransmissionChange}
                   checked={filters.transmission === 'automatic'}
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
                  name="kitchen"
              
                  id="kitchen"
                  onChange={handleChange}
                   checked={filters.kitchen }
                />
                <div className={css.FiltersCheck}>
                  <svg width={33} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-cup-hot"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Kitchen</p>
                </div>
              </label>
              <label htmlFor="TV">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="TV"
                
                  id="TV"
                  onChange={handleChange}
                   checked={filters.TV }
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
                  name="bathroom"
              
                  id="bathroom"
                  onChange={handleChange}
                   checked={filters.bathroom }
                />
                <div className={css.FiltersCheck}>
                  <svg width={33} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-shower"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Bathroom</p>
                </div>
                </label>
                <label htmlFor="refrigerator">
                <input
                  className={css.FiltersFormInput}
                  type="checkbox"
                  name="refrigerator"
              
                  id="refrigerator"
                  onChange={handleChange}
                   checked={filters.fridge }
                />
                <div className={css.FiltersCheck}>
                  <svg width={33} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-fridge"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Refrigerator</p>
                </div>
              </label>
            </div>

                 {/* Vehicle type (form) */}
            <p className={css.FiltersFormTitle}>Vehicle type</p>
            <div className={css.FiltersFormVehicleType}>
              <label htmlFor="van">
                <input
                  className={css.FiltersFormInput}
                   type="radio"
                   id="van"
              name="form"
              value="panelTruck"
              checked={filters.form === 'panelTruck'}
              onChange={handleFormChange}
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
                  type="radio"
                  id="fully"
              name="form"
              value="fullyIntegrated"
              checked={filters.form === 'fullyIntegrated'}
              onChange={handleFormChange}
                />
                <div className={css.FiltersCheck}>
                  <svg width={32} height={32} className={css.FiltersCheckIcon}>
                    <use href="/icon/sprite.svg#icon-fullyIntegrated"></use>
                  </svg>
                  <p className={css.FiltersCheckText}>Fully Integrated</p>
                </div>
              </label>
              <label htmlFor="alcove">
                <input
                  className={css.FiltersFormInput}
                 type="radio"
                 id="alcove"
              name="form"
              value="alcove"
              checked={filters.form === 'alcove'}
              onChange={handleFormChange}
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



