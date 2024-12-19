import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";

const April = () => {
  return (
    <div className={styles["april-container"]}>
      <div className={styles["april-head"]}>
        <h1 className="text-center">April&apos;s Pick</h1>
      </div>
      <section>
        <div className={` w-100 h-100 ${styles.pick}`}>
          <div className={` ${styles["pick-content"]}`}>
            <h1>Why Loiter</h1>
            <span className={styles.author}>
              <strong className="me-2">Author: </strong>
              Shilpa Phadke, Nithila Kanagasabai
            </span>
            <h4>Discussion Details</h4>
            <div className={`${styles.schedule}  `}>
              <span>
                <Image src={"/icons/clock.svg"} width={32} height={32} />
                30th June
              </span>
              <span>
                <Image src={"/icons/calendar.svg"} width={32} height={32} />
                5:00 - 7:00 PM (IST)
              </span>
            </div>
            <button>Join Discussion</button>
          </div>
          <div className={`${styles["book-image"]} `}>
            <Image
              src={"/img/monthpick/pick-image.png"}
              width={360}
              height={498}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default April;
