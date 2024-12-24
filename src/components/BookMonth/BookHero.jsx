import React, { useEffect, useState } from "react";
import styles from "./book.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import API from "@/config";

const BookHero = () => {
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
          setNominees(data.data[0]); // Set nominees from API response
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
    <div className={styles["book-container"]}>
      <section>
        <div className={`container ${styles["book-inner"]}`}>
          <div className={` d-flex flex-column  ${styles.story}`}>
            <h4>Book of the Month</h4>
            <h1>{nominees.title}</h1>
            <span>
              <strong>Author: </strong>
              {nominees?.AuthorName}
            </span>
            {/* <p>
             {nominees?.review}
            </p> */}
            <button className="mt-2" onClick={() => handleReadMore(nominees?.BookID)}>
              Read it here
            </button>
          </div>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.image}`}
          >
            <Image src={nominees?.BookCover} height={498} width={360} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookHero;
