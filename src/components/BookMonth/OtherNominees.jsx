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
    const fetchNominees = async () => {
      try {
        const response = await axios.get(`${API}/api/Book/Vote/Percent`);
        const data = response.data;
        if (data.status === 1 && data.data?.books) {
          const updatedNominees = data.data.books;
          setNominees(updatedNominees);
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
      {!nominees?.length ? (
        <h3 className="text-center">No Nominees Yet!</h3>
      ) : (
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
              <h4>{nominee.title}</h4>
              <p className="fw-bold">{nominee.AuthorName}</p>
              <p className="text-muted">
                {nominee.Month}, {nominee.Year}
              </p>
              <button className="pink-btn" onClick={() => handleReadMore(nominee?.BookID)}>
                Read it here
              </button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default OtherNominees;
