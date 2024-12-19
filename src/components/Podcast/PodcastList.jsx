import React from "react";
import styles from "./podcast.module.css";
import Image from "next/image";

const PodcastList = () => {
  return (
    <>
      <section className={styles.list}>
        <h1 className="text-center">Previous Podcasts</h1>
        <div
          className={`container d-flex flex-column gap-5 align-items-center ${styles["video-list"]}`}
        >
          <div className={`d-flex gap-5 ${styles.video}`}>
            <Image src={"/img/podcast/podcast.png"} width={466} height={275} />
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Video Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne
                  his dolorum molestie reprehendunt, quo luptatum evertitur ex.
                  Altera integre suavitate per an, alienum phaedrum te sea. Ex
                  sea causae dolores, nam et doming dicunt feugait. Ea mel
                  scripta aperiri postulant. Ut sed affert audire.
                </p>
              </div>
              <span>5 days ago</span>
            </div>
          </div>
          <div className={`d-flex gap-5 ${styles.video}`}>
            <Image src={"/img/podcast/podcast.png"} width={466} height={275} />
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Video Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne
                  his dolorum molestie reprehendunt, quo luptatum evertitur ex.
                  Altera integre suavitate per an, alienum phaedrum te sea. Ex
                  sea causae dolores, nam et doming dicunt feugait. Ea mel
                  scripta aperiri postulant. Ut sed affert audire.
                </p>
              </div>
              <span>5 days ago</span>
            </div>
          </div>
          <div className={`d-flex gap-5 ${styles.video}`}>
            <Image src={"/img/podcast/podcast.png"} width={466} height={275} />
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Video Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne
                  his dolorum molestie reprehendunt, quo luptatum evertitur ex.
                  Altera integre suavitate per an, alienum phaedrum te sea. Ex
                  sea causae dolores, nam et doming dicunt feugait. Ea mel
                  scripta aperiri postulant. Ut sed affert audire.
                </p>
              </div>
              <span>5 days ago</span>
            </div>
          </div>
          <div className={`d-flex gap-5 ${styles.video}`}>
            <Image src={"/img/podcast/podcast.png"} width={466} height={275} />
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Video Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne
                  his dolorum molestie reprehendunt, quo luptatum evertitur ex.
                  Altera integre suavitate per an, alienum phaedrum te sea. Ex
                  sea causae dolores, nam et doming dicunt feugait. Ea mel
                  scripta aperiri postulant. Ut sed affert audire.
                </p>
              </div>
              <span>5 days ago</span>
            </div>
          </div>
          <div className={`d-flex gap-5 ${styles.video}`}>
            <Image src={"/img/podcast/podcast.png"} width={466} height={275} />
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Video Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne
                  his dolorum molestie reprehendunt, quo luptatum evertitur ex.
                  Altera integre suavitate per an, alienum phaedrum te sea. Ex
                  sea causae dolores, nam et doming dicunt feugait. Ea mel
                  scripta aperiri postulant. Ut sed affert audire.
                </p>
              </div>
              <span>5 days ago</span>
            </div>
          </div>
          <div className={`d-flex gap-5 ${styles.video}`}>
            <Image src={"/img/podcast/podcast.png"} width={466} height={275} />
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Video Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne
                  his dolorum molestie reprehendunt, quo luptatum evertitur ex.
                  Altera integre suavitate per an, alienum phaedrum te sea. Ex
                  sea causae dolores, nam et doming dicunt feugait. Ea mel
                  scripta aperiri postulant. Ut sed affert audire.
                </p>
              </div>
              <span>5 days ago</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PodcastList;
