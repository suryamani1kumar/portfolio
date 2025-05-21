import Link from "next/link";
import styles from "./layout.module.scss";
import ProfileCard from "../profile/ProfileCard";
import { TiThMenu } from "react-icons/ti";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [opensideNav, setOpenSideNav] = useState(false);
  const handleSideNav = () => {
    setOpenSideNav((prev) => !prev);
  };

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setOpenSideNav(false);
    };

    // Listen to route change complete
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      // Clean up event listeners when the component unmounts
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <div className="container">
      <div className={styles.subContainer}>
        <ProfileCard />
        <div className={styles.pageContainer}>
          <span className={styles.menu} onClick={handleSideNav}>
            <TiThMenu />
          </span>
          {opensideNav && (
            <span className={styles.closeIcon} onClick={handleSideNav}>
              <IoClose />
            </span>
          )}
          <nav
            className={`${styles.Headernav}${
              opensideNav ? " mobilesidenave" : ""
            }`}
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/works">Works</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
