import React from "react";
import styles from "../BookMonth/book.module.css";

import Image from "next/image";

const AboutAuthor = ({ bookData }) => {
  return (
    <div className={styles["book-container"]}>
      <section>
        <div className={`container ${styles["book-inner"]}`}>
          <div className={`d-flex flex-column  ${styles.story}`}>
            <h1>{bookData?.authorName}</h1>

            <p>{bookData?.aboutAuthor || "Not Available"}</p>
          </div>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.image}`}
          >
            <Image
              src={bookData?.authorImage}
              height={396}
              width={330}
              alt={`Author of ${bookData?.title}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAuthor;
