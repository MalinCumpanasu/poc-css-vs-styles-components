import styles from "../../styles/modules/BookTwo.module.css";

export default function BookTwo() {
  return (
    <div className={styles["book-two"]}>
      <div className="book-info">
        <p className="title">Second Book</p>
        <p className="author">Edy</p>
      </div>
    </div>
  );
}
