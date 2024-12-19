import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";

const Previous = () => {
  return (
    <div className={styles["previous-container"]}>
      <div className={styles["nominee-header"]}>
        <h1>Previous Picks</h1>
        <p className="text-center">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos.
        </p>
        <br />
        <button>See All</button>
      </div>

      <section
     
      >
        <div className={styles["nominee-list"]}>
          <div className={styles.nominee}>
            <Image
              src={"/img/nominee/nominee-5.png"}
              height={453}
              width={328}
            />
            <div className={styles.details}>
              <div className="names">
                <span>January&apos;s Pick</span>
                <h4>Peter and the Wolf</h4>
                Margaret Renkl
              </div>
              <h2>64%</h2>
              <button>Read it here</button>
            </div>
          </div>
          <div className={styles.nominee}>
            <Image
              src={"/img/nominee/nominee-6.png"}
              height={453}
              width={328}
            />
            <div className={styles.details}>
              <div className="names">
                <span>February&apos;s Pick</span>
                <h4>Pencil</h4>
                Olivia Wilson
              </div>
              <h2>64%</h2>
              <button>Read it here</button>
            </div>
          </div>
          <div className={styles.nominee}>
            <Image
              src={"/img/nominee/nominee-7.png"}
              height={453}
              width={328}
            />
            <div className={styles.details}>
              <div className="names">
                <span>March&apos;s Pick</span>
                <h4>Wise Creatures</h4>
                Ocean Vuong
              </div>
              <h2>64%</h2>
              <button>Read it here</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Previous;
