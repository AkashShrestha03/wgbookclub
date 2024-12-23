import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../BookMonth/book.module.css";
import Image from "next/image";
import API from "@/config";
import { useRouter } from "next/router";

const OtherArchives = () => {
  const [books, setBooks] = useState([]);
  const router = useRouter(); // Use the Next.js router hook

  useEffect(() => {
    // Fetch the nominees from the API using Axios
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API}/api/Book/Vote/Nominees`);
        const data = response.data;

        if (data.status === 1) {
          setBooks(data.data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleReadMore = (id) => {
    router.push(`/readmore?id=${id}`); // Navigate to the 'readmore' page with the ID as a query parameter
  };

  return (
    <div className={styles["other-container"]}>
      <div className="py-3">
        <h1 className="text-center">Other Nominees</h1>
      </div>
      <section className="d-flex flex-wrap justify-content-center">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book._id}
              className={`d-flex flex-column gap-1 align-items-center ${styles.book}`}
            >
              <Image
                src={book.BookCover}
                alt={book.title}
                width={320}
                height={410}
              />
              <h4>{book.title}</h4>
              <p>{book.AuthorName}</p>
              <p>
                {book.VoteData.VoteMonth}, {book.VoteData.VoteYear}
              </p>
              <button onClick={() => handleReadMore(book.BookID)}>
                Read it here
              </button>
            </div>
          ))
        ) : (
          <p>Loading nominees...</p>
        )}
      </section>
    </div>
  );
};

export default OtherArchives;
