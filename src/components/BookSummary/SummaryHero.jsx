import React from "react";
import styles from "../BookMonth/book.module.css";

import Image from "next/image";

const SummaryHero = () => {
  return (
    <div className={styles["book-container"]}>
      <section>
        <div className={`row ${styles["book-inner"]}`}>
          <div className={`col-md-6 d-flex flex-column  ${styles.story}`}>
            <h4>Book of the Month</h4>
            <h1>Why Loiter?</h1>
            <span>
              <strong>Author: </strong>
              Shilpa Phadke, Sameera Khan, Shilpa Ranade
            </span>
            <p>
              Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his
              dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera
              integre suavitate per an, alienum phaedrum te sea. Ex sea causae
              dolores, nam et doming dicunt feugait. Ea mel scripta aperiri
              postulant. Ut sed affert audire.
            </p>
            <button>Read it here</button>
          </div>
          <div
            className={`col-md-6 d-flex justify-content-center align-items-center`}
          >
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
