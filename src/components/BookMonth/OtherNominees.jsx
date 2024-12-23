import React, { useEffect, useState } from "react";
import styles from "./book.module.css";
import Image from "next/image";
import API from "@/config";
import { useRouter } from "next/router";
import axios from "axios";

const OtherNominees = () => {
  const [nominees, setNominees] = useState([]);
  const router = useRouter(); // Use the router hook

  useEffect(() => {
    // Fetch data from the API
    const fetchNominees = async () => {
      try {
        const response = await axios.get(
          `${API}/api/Book/Won/Get/Winner/Admin`
        ); // Use axios to fetch data
        const data = response.data; // Access the data from the response
        if (data.status === 1 && data.statusCode === 200) {
          setNominees(data.data); // Set nominees from API response
        } else {
          console.error("Error fetching nominees:", data.message);
        }
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };

    fetchNominees();
  }, []);

  const handleReadMore = (id) => {
    router.push(`/readmore?id=${id}`); // Navigate with the ID as a query parameter
  };

  return (
    <div className={styles["other-container"]}>
      <div className="py-3">
        <h1 className="text-center">Previous Book Of The Month</h1>
      </div>
      <section className="d-flex justify-content-center flex-wrap gap-5">
        {nominees.map((nominee) => (
          <div
            key={nominee._id}
            className={`d-flex flex-column gap-1 align-items-center ${styles.book}`}
          >
            <Image
              src={nominee.BookCover}
              alt={nominee.Booktitle}
              width={320}
              height={410}
            />
            <h4>{nominee.Booktitle}</h4>
            <p className="fw-bold">{nominee.AuthorName}</p>
            <p className="text-muted">
              {nominee.Month}, {nominee.Year}
            </p>
            <button onClick={() => handleReadMore(nominee?.BookID)}>
              Read it here
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OtherNominees;
