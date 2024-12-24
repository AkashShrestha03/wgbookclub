import React, { useEffect, useState } from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import API from "@/config";

const Previous = () => {
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
    <div className={styles["previous-container"]}>
      <div className={styles["nominee-header"]}>
        <h1>Previous Picks</h1>
        <p className="text-center">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos.
        </p>
        <br />
        <button>See All</button>
      </div>

      <section>
        <div className={styles["nominee-list"]}>
          {nominees?.map((nominee) => (
            <div className={styles.nominee}>
              <Image
                src={nominee.BookCover}
                height={453}
                width={328}
                alt={nominee.title}
              />
              <div className={styles.details}>
                <div className="names mb-2">
                  <span className="fs-bolder">
                    {nominee.Month} {nominee.Year}&apos;s Pick
                  </span>
                  <h4>{nominee.title}</h4>
                  {nominee.AuthorName}
                </div>
                <button onClick={() => handleReadMore(nominee?.BookID)}>
                  Read it here
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Previous;
