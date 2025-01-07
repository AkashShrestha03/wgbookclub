import React, { useEffect, useState } from "react";
import styles from "../LandingPage/landing.module.css";
import Image from "next/image";
import axios from "axios";
import API from "@/config";

const PodcastHero = () => {
  const [Interviews, setInterviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInterview = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API}/api/Podcast/Get?latest=true`);
        setInterviews(response.data?.data[0] || []);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, []);
  return (
    <div className={styles["podcast-container"]}>
      <div className={styles["podcast-header"]}>
        <h1>Latest Interview</h1>
      </div>
      <section className="">
        <div className={` ${styles.video}`}>
          <div
            dangerouslySetInnerHTML={{
              __html: Interviews?.videoLink,
            }}
          />
        </div>
        <div className={`mx-2 ${styles.writer}`}>
          <span>writer&apos;s talk</span>
           <h1>{Interviews?.title}</h1>
          <p>{Interviews?.description}</p>
        </div>
      </section>
    </div>
  );
};

export default PodcastHero;
