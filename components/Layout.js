import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">LOGO </Link>
        <Link href="/about">about </Link>
        <Link href="/archive">archive </Link>
        <Link href="/join">join</Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Footer </p>
      </footer>
    </div>
  );
}
