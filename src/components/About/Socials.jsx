import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const Socials = () => {
  return <section className={` d-flex flex-column align-items-center gap-5 ${styles.social}`}>
    <h1 className="text-center display-4">Like and Follow Us</h1>
    <div className="d-flex gap-4">
      <Image src={"/icons/youtube-red.svg"} width={113} height={80} />
      <Image src={"/icons/twitter-blue.svg"} width={113} height={80} />
      <Image src={"/icons/instagram-colored.svg"} width={113} height={80} />
    </div>
  </section>;
};

export default Socials;
