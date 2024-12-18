import Image from "next/image";
import React from "react";
import styles from "./landing.module.css";

const Works = () => {
  return (
    <div className={styles["works-container"]}>
      <section className="d-flex flex-column gap-4 align-items-center">
        <h1 className="text-center">How it works</h1>
        <p className="text-center">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
          ornatus nam ei.
        </p>
        <div className={styles["works-bullets"]}>
          <div className={styles.bullet}>
            <Image
              src={"/icons/check-circle.svg"}
              width={50}
              height={50}
            ></Image>
            <h3>
              New Month <br />
              New Book!
            </h3>
          </div>
          <div className={styles.bullet}>
            <Image
              src={"/icons/check-circle.svg"}
              width={50}
              height={50}
            ></Image>
            <h3>
              Catching up <br />
              with authors
            </h3>
          </div>
          <div className={styles.bullet}>
            <Image
              src={"/icons/check-circle.svg"}
              width={50}
              height={50}
            ></Image>
            <h3>
              Good Reads <br />
              Suggestions
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
