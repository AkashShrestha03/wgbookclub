import React, { useState } from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import API from "@/config";

const Suggestion = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!agree) {
      toast.error("You must agree to receive newsletters.");
      return;
    }

    try {
      const response = await axios.post(`${API}/api/NewsLetter/Add`, { email });
      if (response?.data?.statusCode === 200) {
        toast.success("Successfully subscribed to the newsletter!");
        setEmail(""); // Clear the input field
        setAgree(false); // Reset the checkbox
      } else {
        toast.error("Failed to subscribe.");
      }
    } catch (error) {
     
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className={styles["suggestion-container"]}>
      <div className={`row align-items-end ${styles.suggest}`}>
        <div className={` col-md-6 col-sm-6   ${styles["suggest-content"]}`}>
          <h1>Have suggestions for us?</h1>
          <p>
            Send us your recommendations, we are always on a lookout for good
            suggestions
          </p>
          <button
            onClick={() =>
              router.push(
                `https://docs.google.com/forms/d/e/1FAIpQLSdgad96r7eAAXKmKd8s6Q2xYK6eB1jqjTGYzLrW21YHKxrYBA/viewform`
              )
            }
          >
            Write to us
          </button>
        </div>
        <div
          className={`col-md-6 col-sm-6 ${styles["suggest-image"]} text-center`}
        >
          <Image
            className="ms-5"
            src={"/img/suggestions/suggest.png"}
            width={405}
            height={505}
            alt="Suggestions Illustration"
          />
        </div>
      </div>
      <section className="mt-5">
        <h1 className="text-center">Subscribe to Our Newsletter</h1>
        <p className="text-center">
          Be the first one to get the latest updates
        </p>
        <form className="newsletter row gap-1" onSubmit={handleSubmit}>
          <div className="col-md-12 row gap-2">
            <input
              type="text"
              className="col-md-6"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="col-md-5">
              Submit
            </button>
          </div>
          <label htmlFor="t&c" className="col-md-6">
            <input
              type="checkbox"
              name="t&c"
              id="t&c"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            I agree to receive newsletters.
          </label>
        </form>
      </section>
    </div>
  );
};

export default Suggestion;
