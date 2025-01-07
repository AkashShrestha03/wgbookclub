import React, { useEffect, useState } from "react";
import styles from "./podcast.module.css";
import API from "@/config";
import axios from "axios";

const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

const PodcastList = () => {
  const [Interviews, setInterviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInterview = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API}/api/Podcast/Get?latest=false`);
        setInterviews(response.data?.data || []);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, []);
  return (
    <>
      <section className={styles.list}>
        <h1 className="text-center">Previous Interviews</h1>
        <div
          className={`container d-flex flex-column gap-5 align-items-center ${styles["video-list"]}`}
        >
          {Interviews?.map((interview, index) => (
            <div key={index} className={`d-flex gap-5 ${styles.video}`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: interview?.videoLink,
                }}
              />
              <div className={styles["podcast-details"]}>
                <div className="d-flex flex-column">
                  <h2>{interview?.title}</h2>
                  <p>{interview?.description}</p>
                </div>
                <span>{formatDateTime(interview?.dateTime)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PodcastList;
