import styles from './Button.module.css'
/* eslint-disable react/prop-types */
function Button({ children , onClick , type }) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}
/* eslint-enable react/prop-types */
export default Button
