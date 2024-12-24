import React, { useState } from "react";
import styles from "./about.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import API from "@/config";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${API}/api/Contact/User/Add`,
        formData
      );
      if (response?.data?.statusCode === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles["contact-container"]}>
      <section>
        <div className={`row justify-content-center align-items-center gap-2 `}>
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
          <form className={`col-md-6`} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full name here"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.textarea}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={10}
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
