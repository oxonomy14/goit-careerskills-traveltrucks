import Select, {components} from 'react-select';
import css from './Dropdown.module.css';

// Кастомний Control з іконкою
const CustomControl = (props) => {
  const { hasValue } = props; // true, якщо є вибране значення

  return (
    <components.Control {...props}>
      <svg
        className={`${css.iconLocation} ${hasValue ? css.iconActive : ''}`}
        width={20}
        height={20}
      >
        <use href="/icon/sprite.svg#icon-map"></use>
      </svg>
      {props.children}
    </components.Control>
  );
};


const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <span style={{ fontSize: '16px', marginLeft: '4px' }}>
        {menuIsOpen ? (
          <svg className={css.iconChevron}>
            <use href={`/icon/chevron.svg#icon-chevron-up`}></use>
          </svg>
        ) : (
          <svg className={css.iconChevron}>
            <use href={`/icon/chevron.svg#icon-chevron-down`}></use>
          </svg>
        )}
      </span>
    </components.DropdownIndicator>
  );
};



const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: 'var(--inputs)',
    borderRadius: '12px',
    border: '1px solid var(--inputs)',
    padding: '8px 12px 18px 20px',
    fontSize: '16px',
    width: '360px',
    height: '56px',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': { borderColor: 'var(--inputs)' },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? 'var(--gray-light)' : 'var(--badges)',
    color: 'var(--main)',
    padding: '8px 8px 8px 12px',    
    marginBottom: '4px',
    borderRadius: '4px',
    cursor: 'pointer',
  }),
  menuList: (base) => ({
  ...base,
  maxHeight: '200px', 
  overflowY: 'auto', 
  paddingRight: '4px',
  paddingLeft: '4px',      
  boxSizing: 'content-box', 
 
}),
  singleValue: (base) => ({
    ...base,
    fontWeight: '400',
    fontFamily: 'var(--font-family)',
    color: 'var(--main)',
    lineHeight: '1.55',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow:
      '0 0 1px 0 rgba(0, 0, 0, 0.4), 0 8px 24px -6px rgba(0, 0, 0, 0.16)',
    backgroundColor: 'var(--white)',
    padding: '8px',
    zIndex: 10,
  }),
};

const Dropdown = ({ onChangeFilter, locations }) => {
  // Преобразуємо locations у масив об’єктів {value, label}
  const options = locations.map((loc) => ({ value: loc, label: loc }));

  const handleChange = (selectedOption) => {
    // Для сумісності з handleChange у SideBar
    onChangeFilter({ target: { name: 'location', value: selectedOption.value } });
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder="City" 
      isSearchable={false}
      onChange={handleChange}
      components={{
        Control: CustomControl,
        IndicatorSeparator: () => null,
        DropdownIndicator,
      }}
    />
  );
};

export default Dropdown;
