import React, { useState } from "react";
import styles from "./summary.module.css";
import { Avatar, Button } from "@mui/material";
import { Modal, Form } from "react-bootstrap";

const Discussions = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [typedComment, setTypedComment] = useState("");

  const handleOpenModal = () => {
    if (typedComment.trim() === "") {
      alert("Please enter a comment before proceeding.");
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
      alert("Name and email are required.");
      return;
    }

    const payload = {
      name,
      email,
      comment,
    };

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Comment submitted successfully!");
        setName("");
        setEmail("");
        setTypedComment("");
        setComment("");
        setShowModal(false);
      } else {
        alert("Failed to submit the comment. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the comment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles["discussion-container"]}>
      <h1>Discussions</h1>
      <section className="container d-flex flex-column gap-5">
        <main className={styles.messages}>
          <div className={styles.comment}>
            <span className="d-flex align-items-center gap-3">
              <Avatar>J</Avatar>
              <h4>John Doe</h4>
            </span>
            <div className={styles.message}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iusto facilis excepturi repellat, numquam voluptates similique
              praesentium eum quidem deleniti atque modi, velit sunt pariatur.
              Officiis impedit at quod mollitia?
            </div>
            <span>5 mins ago</span>
          </div>

          <hr />
          {/* Repeat other comments as needed */}
        </main>
        <button>Load More</button>
        <div className={styles.commentBox}>
          <input
            type="text"
            placeholder="Type your message here"
            value={typedComment}
            onChange={(e) => setTypedComment(e.target.value)}
          />
          <button className='btn btn-primary' onClick={handleOpenModal}>
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
