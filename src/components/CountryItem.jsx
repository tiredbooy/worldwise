import styles from "./CountryItem.module.css";
/* eslint-disable react/prop-types */
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
/* eslint-enable react/prop-types */
export default CountryItem;
