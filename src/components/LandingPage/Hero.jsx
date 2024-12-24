import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <div className={styles["hero-section"]}>
      <section className="container">
        <div className={`row ${styles.hero}`}>
          <div className="col-lg-6 mt-3">
            <Image
              src={"/img/banner/book-girl.png"}
              width={505}
              height={630}
              alt="book girl"
            />
          </div>
          <div className={`col-lg-6 ${styles["banner-right"]}`}>
            <div className={styles["banner-content"]}>
              <span>Hey there!</span>
              <h1>Welcome to our BookClub</h1>
              <p>
                Discover, Discuss, and Delight in Books with Fellow Avid
                Readers.
              </p>
              <button
                onClick={() =>
                  router.push(`https://docs.google.com/forms/d/e/1FAIpQLSdgad96r7eAAXKmKd8s6Q2xYK6eB1jqjTGYzLrW21YHKxrYBA/viewform
`)
                }
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
