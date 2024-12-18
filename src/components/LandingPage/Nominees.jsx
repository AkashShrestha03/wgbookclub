import React, { useState, useEffect } from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import axios from "axios";
import API from "@/config";
import toast from "react-hot-toast";

const Nominees = () => {
  const [nominees, setNominees] = useState([]);
  const [voteInfo, setVoteInfo] = useState({ VoteYear: "", VoteMonth: "" });
  const [showModal, setShowModal] = useState(false);
  const [selectedBookID, setSelectedBookID] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const response = await axios.get(
          `${API}/api/Book/Vote/Percent`
        );
        const data = response.data;
        if (data.status === 1 && data.data?.books) {
          const updatedNominees = data.data.books.map((book) => ({
            ...book,
            voted: false, // Add voted property
          }));
          setNominees(updatedNominees);
          setVoteInfo({
            VoteYear: data.data.VoteYear,
            VoteMonth: data.data.VoteMonth,
          });
        }
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };

    fetchNominees();
  }, []);

  const handleVoteClick = (bookID) => {
    setSelectedBookID(bookID);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEmail("");
  };

  const handleVoteSubmit = async (e) => {
    e.preventDefault();
    if (!email || !selectedBookID) return;

    try {
      const response = await axios.post(
        `${API}/api/Book/Vote/Add`,
        null,
        {
          params: { BookID: selectedBookID, Email: email },
        }
      );
      if (response.status === 200) {
        toast.success("Vote submitted successfully!");
        setNominees((prevNominees) =>
          prevNominees.map((nominee) =>
            nominee.BookID === selectedBookID
              ? { ...nominee, voted: true }
              : nominee
          )
        );
        handleModalClose();
      } else {
        toast.error("Failed to submit vote. Please try again.");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={styles["nominees-container"]}>
      <div className={styles["nominee-header"]}>
        <h1>
          Book Nominees for {voteInfo.VoteMonth}
        </h1>
        <p className="text-center">Theme of next discussion</p>
        <br />
        <button>See All</button>
      </div>

      <section>
        <div className={styles["nominee-list"]}>
          {nominees?.map((nominee) => (
            <div key={nominee.BookID} className={styles.nominee}>
              <Image
                src={nominee.BookCover}
                alt={nominee.title}
                height={344}
                width={249}
              />
              <div className={styles.details}>
                <div className="names">
                  <h4>{nominee.title}</h4>
                  {nominee.AuthorName}
                </div>
                <h2>{nominee.VotePercent}%</h2>
                {nominee.voted ? (
                  <button className={styles.votedButton} disabled>
                    Voted
                  </button>
                ) : (
                  <button onClick={() => handleVoteClick(nominee.BookID)}>
                    Vote
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Modal */}
      {showModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Vote for Your Favorite Book</h2>
              <button onClick={handleModalClose} className={styles.closeButton}>
                &times;
              </button>
            </div>
            <form onSubmit={handleVoteSubmit} className={styles.modalBody}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.inputField}
              />
              <button type="submit" className={styles.submitButton}>
                Submit Vote
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nominees;
