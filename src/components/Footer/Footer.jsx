import Image from 'next/image';
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <section className={styles["footer-container"]}>
      <footer className="row">
        <div className={`col-md-6 ${styles.copyright}`}>
          © Copyright 2024. yuktidea All Right Reserved
        </div>
        <div className={`${styles.socials} col-md-6`}>
          <Image src="/icons/youtube.svg" width={42} height={30} />
          <Image src="/icons/insta.svg" width={42} height={30} />
          <Image src="/icons/twitter.svg" width={42} height={30} />
        </div>
      </footer>
    </section>
  );
}

export default Footer
