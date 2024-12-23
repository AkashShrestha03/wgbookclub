import React from "react";
import styles from "./summary.module.css";

const Details = ({bookData}) => {
  return (
    <>
      <div className={`${styles["summary-container"]}`}>
        <section className={styles.section1}>
          <h2>Summary</h2>
          <p>
           {bookData.summary}
          </p>
        </section>
        <section className={styles.section2}>
          <h2>Review</h2>
          <p>
           {bookData.review}
          </p>
        </section>
      </div>
    </>
  );
};

export default Details;
