import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={styles["footer-container"]}>
      <footer className="row">
        <div className={`col-md-6 ${styles.copyright}`}>
          © Copyright {new Date().getFullYear()}. yuktidea All Right Reserved
        </div>
        <div className={`${styles.socials} col-md-6`}>
          <Link
            href={`https://youtube.com/@womenandgenderbookclub?si=2HU7FgkXVnn7Mbz9
`}
          >
            {" "}
            <Image src="./icons/youtube.svg" width={42} height={30} />
          </Link>
          <Link
            href={`#
`}
          >
            <Image src="./icons/insta.svg" width={42} height={30} />
          </Link>
          <Link
            href={`https://x.com/WGBookClub2023
`}
          >
            <Image src="./icons/X-white.svg" width={42} height={32} />
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
