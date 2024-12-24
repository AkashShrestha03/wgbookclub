import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <section
      className={` d-flex flex-column align-items-center gap-5 ${styles.social}`}
    >
      <h1 className="text-center display-4">Like and Follow Us</h1>
      <div className="d-flex gap-4">
        <Link
          href={`https://youtube.com/@womenandgenderbookclub?si=2HU7FgkXVnn7Mbz9
`}
        >
          <Image src={"/icons/youtube-red.svg"} width={113} height={80} />
        </Link>
        <Link
          href={`https://x.com/WGBookClub2023
`}
        >
          <Image src={"/icons/X.svg"} width={113} height={80} />
        </Link>
        <Link
          href={`#
`}
        >
          <Image src={"/icons/instagram-colored.svg"} width={113} height={80} />
        </Link>
      </div>
    </section>
  );
};

export default Socials;
