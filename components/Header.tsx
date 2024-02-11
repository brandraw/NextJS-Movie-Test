import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href={"/about-us"}>소개</Link>
        </li>
        <li>
          <Link href={"/movies/12312312"}>영화</Link>
        </li>
        <li>
          <Link href={"/"}>문의하기</Link>
        </li>
      </ul>
    </nav>
  );
}
