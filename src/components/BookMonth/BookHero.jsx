import React from "react";
import styles from "./book.module.css";
import Image from "next/image";
import Link from "next/link";

const BookHero = () => {
  return (
    <div className={styles["book-container"]}>
      <section>
        <div className={`container ${styles["book-inner"]}`}>
          <div className={` d-flex flex-column  ${styles.story}`}>
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
            <button>
              <Link href={"/readmore"}>Read it here</Link>
            </button>
          </div>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.image}`}
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

export default BookHero;
