import React from "react";
import styles from "../LandingPage/landing.module.css";
import Image from "next/image";

const PodcastHero = () => {
  return (
    <div className={styles["podcast-container"]}>
      <div className={styles["podcast-header"]}>
        <h1>Latest Interview</h1>
      </div>
      <section className="">
        <div className={` ${styles.video}`}>
         
          <iframe
            width="640"
            height="496"
            src="https://www.youtube.com/embed/FcwH7UpXHAk?si=fKx2NrFfNnNOTMVP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className={`mx-2 ${styles.writer}`}>
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
        </div>
      </section>
    </div>
  );
};

export default PodcastHero;
