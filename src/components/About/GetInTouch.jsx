import React from "react";
import styles from "./about.module.css";

const GetInTouch = () => {
  return (
    <div className={styles["contact-container"]}>
      <section>
        <div className={`row justify-content-center align-items-center gap-2 p-5`}>
          <div
            className={`col-md-5 d-flex flex-column justify-content-center  ${styles["contact-text"]}`}
          >
            <h1> Get in Touch with Us</h1>
            <p>
              We&apos;d love to hear from you! Whether you have questions,
              feedback, or suggestions, feel free to reach out. Fill out the
              form below or use the contact details provided.
            </p>
          </div>
          <form className={`col-md-6`}>
            <div className={styles.input}>
              <label htmlFor="name"> Your name</label>
              <input type="text" id="name" placeholder="Full name here" />
            </div>
            <div className={styles.input}>
              <label htmlFor="email"> Your mail</label>
              <input type="email" id="email" placeholder="Your email address" />
            </div>
            <div className={styles.textarea}>
              <label htmlFor="name">Message</label>
              <textarea
                type="text"
                rows={10}
                placeholder="Type your message here"
              />
            </div>
            <button>Send message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
