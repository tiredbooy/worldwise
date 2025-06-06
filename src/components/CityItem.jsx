import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function CityItem({ city }) {
  const { currentCity , deleteCity } = useCities();
  const { cityName, emoji, date, id , position } = city;


  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>
    </li>
  );
}
/* eslint-enable no-unused-vars */
/* eslint-enable react/prop-types */
export default CityItem;
