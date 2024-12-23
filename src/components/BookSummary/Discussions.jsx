import React, { useState, useEffect } from "react";
import styles from "./summary.module.css";
import { Avatar, Button } from "@mui/material";
import { Modal, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";
import API from "@/config";
import { useRouter } from "next/router";

const Discussions = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [typedComment, setTypedComment] = useState("");
  const [comments, setComments] = useState([]); // State to store comments
  const router = useRouter();

  const { id } = router.query;

  // Fetch comments from the API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API}/api/Comment/Get?BookID=${id}`); // Replace with your API URL
        const data = response?.data;
        if (data.status === 1) {
          setComments(data?.data); // Assuming the comments are in `data.data`
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, []);

  const handleOpenModal = () => {
    if (typedComment.trim() === "") {
      toast.error("Please enter a comment before proceeding.");
      return;
    }
    setComment(typedComment.trim());
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      toast.error("Name and email are required.");
      return;
    }

    const payload = {
      name,
      email,
      comment,
    };

    try {
      const response = await axios.post(
        `${API}/api/Comment/Write?BookID=${id}`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success("Comment submitted successfully!");
        setName("");
        setEmail("");
        setTypedComment("");
        setComment("");
        setShowModal(false);
        // Refresh comments
        setComments((prev) => [
          ...prev,
          {
            _id: response.data._id || new Date().getTime(), // Use API response ID if available
            name,
            email,
            comment,
            Timestamp: new Date().toISOString(),
          },
        ]);
      } else {
        toast.error("Failed to submit the comment. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles["discussion-container"]}>
      <h1>Discussions</h1>
      <section className="container d-flex flex-column gap-5">
        <main className={styles.messages}>
          {comments.length ? (
            comments.map((item) => (
              <div key={item._id} className={styles.comment}>
                <span className="d-flex align-items-center gap-3">
                  <Avatar>{item?.name.charAt(0).toUpperCase()}</Avatar>
                  <h4>{item?.name}</h4>
                </span>
                <div className={styles?.message}>{item?.comment}</div>
                <span>
                  {new Date(item.Timestamp).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </span>
                <hr />
              </div>
            ))
          ) : (
            <h3>No Comments Yet!</h3>
          )}
        </main>
        <button>Load More</button>
        <div className={styles.commentBox}>
          <input
            type="text"
            placeholder="Type your message here"
            value={typedComment}
            onChange={(e) => setTypedComment(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleOpenModal}>
            Comment
          </button>
        </div>
      </section>

      {/* Modal for Name and Email */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Discussions;
