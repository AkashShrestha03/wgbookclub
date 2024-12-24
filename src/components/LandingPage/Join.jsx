import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const Join = () => {
  const router = useRouter();
  return (
    <section className={`${styles.join} row w-100`}>
      <div className={`col-md-6 ${styles.left}`}>
        <h1>How to Join</h1>
        <p>
          Interested in joining us? It&apos;s easy! Just click the links below
          to join our email list or connect with us on WhatsApp.
        </p>
        <button
          onClick={() =>
            router.push(`https://docs.google.com/forms/d/e/1FAIpQLSdgad96r7eAAXKmKd8s6Q2xYK6eB1jqjTGYzLrW21YHKxrYBA/viewform
`)
          }
          className={styles["join-mobile"]}
        >
          Join us now
        </button>
      </div>
      <div className={`col-md-6 ${styles.right}`}>
        <div className={styles.email}>
          <button
            onClick={() =>
              router.push(`https://docs.google.com/forms/d/e/1FAIpQLSdgad96r7eAAXKmKd8s6Q2xYK6eB1jqjTGYzLrW21YHKxrYBA/viewform
`)
            }
          >
            Join via Email
          </button>
        </div>
        <div className={styles.whatsapp}>
          <button
            onClick={() =>
              router.push(`https://chat.whatsapp.com/LBjuzyzFcFLKG1Mv3Id7vk`)
            }
          >
            <Image src={"/icons/whatsapp.svg"} width={48} height={27}></Image>{" "}
            Join via Whatsapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Join;
