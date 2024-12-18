import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";

const Suggestion = () => {
  return (
    <div className={styles["suggestion-container"]}>
      <div
        className={`row align-items-end ${styles.suggest}`}
      >
        <div
          className={` col-md-6 col-sm-6   ${styles["suggest-content"]}`}
        >
          <h1>Have suggestions for us?</h1>
          <p>
            Send us your recommendations, we are always on a outlook for good
            suggestions
          </p>
          <button>Write to us</button>
        </div>
        <div className={`col-md-6 col-sm-6 ${styles["suggest-image"]} text-center`}>
          <Image
            className="ms-5"
            src={"/img/suggestions/suggest.png"}
            width={405}
            height={505}
          />
        </div>
      </div>
      <section className="mt-5">
        <h1 className="text-center">Subscribe to Our Newsletter</h1>
        <p className="text-center">
          Be the first one to get the latest updates
        </p>
        <form className="newsletter row">
          <input type="text" className="col-md-6" placeholder="Your email" />
          <button type="submit" col-md-6>
            Submit
          </button>
          <label htmlFor="t&c" className="col-md-6">
            <input type="checkbox" name="t&c" id="t&c" />I agree to receive
            newsletters.
          </label>
        </form>
      </section>
    </div>
  );
};

export default Suggestion;
