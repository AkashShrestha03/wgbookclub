import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const Story = () => {
  return (
    <div className={styles["about-container"]}>
      <section>
        <div className={` ${styles["about-inner"]}`}>
          <div className={`  ${styles.story}`}>
            <h1>Our Story</h1>
            <p>
              Welcome to our community of book lovers! Our journey began with a
              shared passion for literature and a desire to connect with others
              over great books. Since then, we&apos;ve grown into a vibrant
              community of readers from all walks of life.Welcome to our
              community of book lovers! Our journey began with a shared passion
              for literature and a desire to connect with others over great
              books. Since then, we&apos;ve grown into a vibrant community of
              readers from all walks of life.
            </p>
          </div>
          <div className={` mt-5 ${styles["story-grid"]}`}>
            <div className={styles["story-1"]}>
              <Image src={"/img/about/story-1.png"} width={255} height={214} />
            </div>
            <div className={styles["story-2"]}>
              <Image src={"/img/about/story-2.png"} width={285} height={326} />
            </div>
            <div className={styles["story-3"]}>
              <Image src={"/img/about/story-3.png"} width={255} height={292} />
            </div>
            <div className={styles["story-4"]}>
              <Image src={"/img/about/story-4.png"} width={285} height={192} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
