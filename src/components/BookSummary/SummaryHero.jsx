import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../BookMonth/book.module.css";
import Image from "next/image";

const SummaryHero = ({ bookData }) => {
  return (
    <div className={styles["book-container"]}>
      <section>
        <div className={`container ${styles["book-inner"]}`}>
          <div className={`d-flex flex-column ${styles.story}`}>
            <h1>{bookData.title}</h1>
            <span>
              <strong>Author: </strong>
              {bookData.authorName}
            </span>
            <span>
              <strong>Genre: </strong>
              {bookData.genre}
            </span>
            <span>
              <strong>Language: </strong>
              {bookData.language}
            </span>
            <span>
              <strong>Publication: </strong>
              {bookData.publication}
            </span>
            <p>{bookData.summary}</p>
          </div>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.image}`}
          >
            <Image
              src={bookData.BookCover}
              height={498}
              width={360}
              alt={`Cover of ${bookData.title}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummaryHero;
