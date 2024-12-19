import React from "react";
import styles from "../BookMonth/book.module.css";

import Image from "next/image";

const SummaryHero = () => {
  return (
    <div className={styles["book-container"]}>
      <section>
        <div className={`container ${styles["book-inner"]}`}>
          <div className={`d-flex flex-column  ${styles.story}`}>
            <h1>Why Loiter?</h1>
            <span>
              <strong>Author: </strong>
              Shilpa Phadke, Sameera Khan, Shilpa Ranade
            </span>
            <span>
              <strong>Genre: </strong>
              Thriller / Mystery
            </span>
            <span>
              <strong>Language: </strong>
              English
            </span>
            <span>
              <strong>Publication Date: </strong>
              10 December 2024
            </span>
            <p>
              Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his
              dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera
              integre suavitate per an, alienum phaedrum te sea. Ex sea causae
              dolores, nam et doming dicunt feugait. Ea mel scripta aperiri
              postulant. Ut sed affert audire.
            </p>
          </div>
          <div className={`d-flex justify-content-center align-items-center`}>
            <Image
              src={"/img/monthpick/pick-image.png"}
              height={498}
              width={360}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummaryHero;
