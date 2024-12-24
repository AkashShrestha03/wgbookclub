import React from "react";
import styles from "./podcast.module.css";
import Image from "next/image";

const PodcastList = () => {
  return (
    <>
      <section className={styles.list}>
        <h1 className="text-center">Previous Interviews</h1>
        <div
          className={`container d-flex flex-column gap-5 align-items-center ${styles["video-list"]}`}
        >
          {/* <div className={`d-flex gap-5 ${styles.video}`}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FcwH7UpXHAk?si=fKx2NrFfNnNOTMVP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Why Loiter & Yaari</h2>
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
          </div> */}
          <div className={`d-flex gap-5 ${styles.video}`}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xToOSbNUalA?si=V5JBQodvK3YqrpJ4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Lies Our Mothers Told Us & How Not to be a Superwoman</h2>
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qao_CHO1RaE?si=CXMKzOrmdnI08kvE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Rumours of Spring</h2>
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Af4jgYsWLZg?si=0mB4gOb6CtnLxbYY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>The Last Courtesan</h2>
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JmkVbN1uAaI?si=iOl9iCOx3NnLejPS"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Liberation of Sita by Volga</h2>
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/80-Pyu4Te9g?si=KvLBcn2tffVLM1W3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className={styles["podcast-details"]}>
              <div className="d-flex flex-column">
                <h2>Shrayana Bhattacharya- Desperately Seeking Shahrukh</h2>
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
