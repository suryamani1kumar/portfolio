import Link from "next/link";
import styles from "./layout.module.scss";
import ProfileCard from "../profile/ProfileCard";
import { TiThMenu } from "react-icons/ti";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <div className={styles.subContainer}>
        <ProfileCard />
        <div>
          <span className={styles.menu}>
            <TiThMenu />
          </span>

          <nav className={styles.Headernav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/works">Works</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className={styles.pageContainer}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
