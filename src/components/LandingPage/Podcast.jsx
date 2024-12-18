import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import Link from "next/link";

const Podcast = () => {
  return (
    <div className={styles["podcast-container"]}>
      <div className={styles["podcast-header"]}>
        <h1>Latest Podcast</h1>
        <p className="text-center">
          Catch up on our most recent session with [Author Name]. Don&apos;t
          miss the insights and engaging discussion
        </p>
      </div>
      <section className="">
        <div className={` ${styles.video}`}>
          <Image
            src={"/img/podcast/podcast.png"}
            width={649}
            height={496}
          ></Image>
        </div>
        <div className={`${styles.writer}`}>
          <span>writer&apos;s talk</span>
          <h1>
            In talks with Sebastian <br /> Bennett
          </h1>
          <p>
            Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his
            dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera
            integre suavitate per an, alienum phaedrum te sea. Ex sea causae
            dolores, nam et doming dicunt feugait. Ea mel scripta aperiri
            postulant. Ut sed affert audire.
          </p>
          <button>
            <Link href={"/podcast"}>Checkout the Library</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Podcast;
