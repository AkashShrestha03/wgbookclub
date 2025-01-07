import React, { useEffect, useState } from "react";
import styles from "./landing.module.css";
import Link from "next/link";
import API from "@/config";
import axios from "axios";
import { useRouter } from "next/router";

const Podcast = () => {
  const [Interviews, setInterviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter()

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
        <p className="text-center">
          Catch up on our most recent session. Don&apos;t
          miss the insights and engaging discussion
        </p>
      </div>
      <section className="">
        <div className={` ${styles.video}`}>
          <div
            dangerouslySetInnerHTML={{
              __html: Interviews?.videoLink,
            }}
          />
        </div>
        <div className={`${styles.writer}`}>
          <span>writer&apos;s talk</span>
          <h1>{Interviews?.title}</h1>
          <p>{Interviews?.description}</p>
          <button onClick={()=>router.push("/podcast")}>
           Checkout the Library
          </button>
        </div>
      </section>
    </div>
  );
};

export default Podcast;
