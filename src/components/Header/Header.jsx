import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { ListGroup } from "react-bootstrap";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const BOM = router.pathname === "/bookofthemonth";
  const about = router.pathname === "/about";
  const archive_1 = router.pathname === "/archive/bookofthemonth";
  const archive_2 = router.pathname === "/archive/nominees";
  const interview = router.pathname === "/podcast";

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={styles["main-header"]}>
        <header className="row justify-content-between">
          <Link
            href={"/"}
            className="logo-container col-xl-3 col-md-3"
            style={{ width: "fit-content", zIndex: 2 }}
          >
            <Image src={"/logo/logo.svg"} width={190} height={87} />
          </Link>
          <div className={`col-xl-6 col-md-9 ${styles.navbar}`}>
            <ul className="nav-links w-100 text-center pt-2">
              <li className={`col-md-3 ${BOM && "active"}`}>
                <Link href={"/bookofthemonth"}>Book Of The Month</Link>
              </li>
              <li
                className={`mx-2 ${styles.dropdown}`}
                onMouseEnter={toggleDropdown}
                onMouseLeave={closeDropdown}
              >
                <span
                  className={`${styles["dropdown-toggle"]} ${
                    (archive_1 && "active") || (archive_2 && "active")
                  }`}
                >
                  Archive
                </span>
                {isDropdownOpen && (
                  <ul className={styles["dropdown-menu"]}>
                    <li>
                      <Link href={"/archive/bookofthemonth"}>
                        Book Of The Month <br />
                        Archive
                      </Link>
                    </li>
                    <li>
                      <Link href={"/archive/nominees"}>Nominees Archive</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={interview && "active"}>
                <Link href={"/podcast"}>Interview With Authors</Link>
              </li>
              <li className={about && "active"}>
                <Link href={"/about"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className={`col-xl-2 col-md-3 ${styles.socials}`}>
            <Link
              href={`https://youtube.com/@womenandgenderbookclub?si=2HU7FgkXVnn7Mbz9
`}
            >
              {" "}
              <Image src="/icons/youtube.svg" width={42} height={30} />
            </Link>
            <Link
              href={`#
`}
            >
              <Image src="/icons/insta.svg" width={42} height={30} />
            </Link>
            <Link
              href={`https://x.com/WGBookClub2023
`}
            >
              <Image src="/icons/X-white.svg" width={42} height={32} />
            </Link>
          </div>
        </header>
        {isMenuOpen ? (
          <div className={`${styles.menu}`} onClick={toggleMenu}>
            <Image src={"/icons/close.svg"} height={25} width={35} />
          </div>
        ) : (
          <div className={`${styles.menu}`} onClick={toggleMenu}>
            <Image src={"/icons/menu.svg"} height={25} width={35} />
          </div>
        )}
      </section>
      <div className={` ${isMenuOpen ? styles.open : styles.mobile}`}>
        <ListGroup className={styles["list-group"]}>
          <ListGroup.Item>
            <Link href={"/bookofthemonth"}>Book Of The Month</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href={"/archive/bookofthemonth"}>
              Archive <br /> Book Of The Month
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href={"/archive/nominees"}>
              Archive <br /> Nominees
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href={"/podcast"}>
              Interview <br />
              With Authors
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href={"/about"}>About Us</Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default Header;
