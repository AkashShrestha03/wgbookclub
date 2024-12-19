import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const Header = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={styles["main-header"]}>
        <header className="row">
          <Link href={"/"} className="logo-container col-md-3">
            <Image src={"/logo/logo.svg"} width={190} height={87} />
          </Link>
          <div className={`col-md-6 ${styles.navbar} `}>
            <ul className="nav-links w-100  text-center pt-2">
              <li className="col-md-3">
                <Link href={"/bookofthemonth"}>Book of the Month</Link>
              </li>
              <li className=" mx-2">
                <Link href={"/archive"}>Archive</Link>
              </li>
              <li className="">
                <Link href={"/podcast"}>Podcast</Link>
              </li>
              <li className="">
                <Link href={"/about"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className={`col-md-3 ${styles.socials}`}>
            <Image src="./icons/youtube.svg" width={42} height={30} />
            <Image src="./icons/insta.svg" width={42} height={30} />
            <Image src="./icons/twitter.svg" width={42} height={30} />
          </div>
        </header>
          <div className={` ${styles.menu}`}>
            <Image src={"/icons/menu.svg"} height={25} width={35} />
          </div>
      </section>
    </>
  );
};

export default Header;
