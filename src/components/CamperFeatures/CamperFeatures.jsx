import css from './CamperFeatures.module.css';

const  CamperFeatures = ({ item }) => {

    if (!item) return null; 
  const features = [
    { key: "AC", label: "AC", icon: "icon-diagram" },
    { key: "bathroom", label: "Bathroom", icon: "icon-shower" },
    { key: "kitchen", label: "Kitchen", icon: "icon-cup-hot" },
    { key: "TV", label: "TV", icon: "icon-tv" },
    { key: "radio", label: "Radio", icon: "icon-radios" },
    { key: "refrigerator", label: "Refrigerator", icon: "icon-fridge" },
    { key: "microwave", label: "Microwave", icon: "icon-microwave" },
    { key: "gas", label: "Gas", icon: "icon-gas" },   
    { key: "water", label: "Water", icon: "icon-water" },
  ];

  return (
    <ul className={css.featuresList}>
      {features.map(
        (feature) =>
          item[feature.key] && (
            <li key={feature.key} className={css.featuresItem}>
                  <div className={css.featuresBox}>
              <svg className={css.featuresIcon} width={20} height={20}>
                <use xlinkHref={`/icon/sprite.svg#${feature.icon}`} />
              </svg>
              <span className={css.featuresTxt}>{feature.label}</span>
              </div>
            </li>
          )
      )}
    </ul>
  );
}

export default CamperFeatures; 

  