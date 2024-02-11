import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
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
    </header>
  );
}
