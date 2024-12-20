import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";
const Join = () => {
  return (
    <section className={`${styles.join} row w-100`}>
      <div className={`col-md-6 ${styles.left}`}>
        <h1>How to Join</h1>
        <p>
          Interested in joining us? It&apos;s easy! Just click the links below
          to join our email list or connect with us on WhatsApp.
        </p>
        <button>Join us now</button>
      </div>
      <div className={`col-md-6 ${styles.right}`}>
        <div className={styles.email}>
          <button>Join via Email</button>
        </div>
        <div className={styles.whatsapp}>
          <button>
            <Image src={"/icons/whatsapp.svg"} width={48} height={27}></Image>{" "}
            Join via Whatsapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Join;
