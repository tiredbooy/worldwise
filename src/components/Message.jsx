import styles from "./Message.module.css";
/* eslint-disable react/prop-types */
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}
/* eslint-enable react/prop-types */

export default Message;
