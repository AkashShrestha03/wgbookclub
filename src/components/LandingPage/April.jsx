import React, { useEffect, useState } from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import API from "@/config";
import Link from "next/link";

const April = () => {
  const [nominees, setNominees] = useState([]);
  const [voteInfo, setVoteInfo] = useState({ VoteYear: "", VoteMonth: "" });
  const [pollStatus, setPollStatus] = useState(false);
  const router = useRouter(); // Use the router hook

  useEffect(() => {
    const fetchFilterInfo = async () => {
      try {
        const response = await axios.get(`${API}/api/Filter/Get`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWMyZWMwODY4ZjdhZGMyYTU5MjYwZiIsInJvbGUiOiJBRE1JTiIsImZpcnN0bmFtZSI6IkFkbWluIiwibGFzdG5hbWUiOiJCb29rIiwiZW1haWwiOiJBZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MzUwMjU1ODcsImV4cCI6MTczNTExMTk4N30.Oz91eARkvoFMRGtsTHyojgRHDs5UGA36KGAQi8aTOoQ`,
          },
        });
        const data = response.data;
        if (data.status === 1 && data.data) {
          setPollStatus(data?.data?.discussion);
          setVoteInfo({
            VoteYear: data.data.year,
            VoteMonth: data.data.month,
          });
        }
      } catch (error) {
        console.error("Error fetching filter info:", error);
      }
    };

    // Fetch data from the API
    const fetchNominees = async () => {
      try {
        const response = await axios.get(`${API}/api/Discussion/Get`); // Use axios to fetch data
        const data = response.data; // Access the data from the response
        if (data.status === 1 && data.statusCode === 200) {
          setNominees(data.data[0]); // Set nominees from API response
        } else {
          console.error("Error fetching nominees:", data.message);
        }
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };
    fetchFilterInfo();
    fetchNominees();
  }, []);

  return (
    <div className={styles["april-container"]}>
      <div className={styles["april-head"]}>
        <h1 className="text-center">April&apos;s Pick</h1>
      </div>
      <section>
        <div className={` w-100 h-100 ${styles.pick}`}>
          <div className={` ${styles["pick-content"]}`}>
            <h1>{nominees?.BookTitle}</h1>
            <span className={styles.author}>
              <strong className="me-2">Author: </strong>
              {nominees?.Author}
            </span>
            <h4>Discussion Details</h4>
            <div className={`${styles.schedule}  `}>
              <span>
                <Image src={"/icons/clock.svg"} width={32} height={32} />
                {nominees?.DiscussionDate}
              </span>
              <span>
                <Image src={"/icons/calendar.svg"} width={32} height={32} />
                {nominees?.DiscussionStartTime} -{nominees?.DiscussionEndTime}
                (IST)
              </span>
            </div>
            {pollStatus && (
              <button onClick={() => router.push(nominees?.DiscussionLink)}>
                Join Discussion
              </button>
            )}
          </div>
          <div className={`${styles["book-image"]} `}>
            <Image src={nominees?.BookCover} width={360} height={498} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default April;
