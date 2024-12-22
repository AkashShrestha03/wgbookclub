import React from "react";
import styles from "../BookMonth/book.module.css";

import Image from "next/image";

const AboutAuthor = () => {
  return (
    <div className={styles["book-container"]}>
      <section>
        <div className={`container ${styles["book-inner"]}`}>
          <div className={`d-flex flex-column  ${styles.story}`}>
            <h1>About Author</h1>

            <p>
              Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his
              dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera
              integre suavitate per an, alienum phaedrum te sea. Ex sea causae
              dolores, nam et doming dicunt feugait. Ea mel scripta aperiri
              postulant. Ut sed affert audire.
            </p>
          </div>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.image}`}
          >
            <Image
              src={"/img/monthpick/pick-image.png"}
              height={396}
              width={330}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAuthor;
