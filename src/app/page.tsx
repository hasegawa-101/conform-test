import Link from "next/link";
export default function Home() {

  return (
    <div className="max-w-3xl px-4 mx-auto">
    <nav>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}