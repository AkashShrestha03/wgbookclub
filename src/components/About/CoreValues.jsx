import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div className={styles["values-container"]}>
      <div className={styles["value-header"]}>
        <h1>Our Core Values</h1>
        <p className="text-center">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
          ornatus nam ei.
        </p>
      </div>

      <section className="">
        <div className={styles["value-list"]}>
          <div className={styles.value}>
            <Image src={"/img/about/value.png"} height={368} width={342} />
            <div className={styles.details}>
              <br />
              <br />
              <h2>Value 1</h2>
            </div>
          </div>
          <div className={styles.value}>
            <Image src={"/img/about/value.png"} height={368} width={342} />
            <div className={styles.details}>
              <br />
              <br />
              <h2>Value 2</h2>
            </div>
          </div>
          <div className={styles.value}>
            <Image src={"/img/about/value.png"} height={368} width={342} />
            <div className={styles.details}>
              <br />
              <br />
              <h2>Value 3</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreValues;
