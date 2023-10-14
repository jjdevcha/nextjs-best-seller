import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          border: solid #19231a 2px;
          padding: 20px;
          border-top-left-radius: 10px 140px;
          border-top-right-radius: 10px 130px;
          border-bottom-left-radius: 110px 19px;
          border-bottom-right-radius: 120px 24px;
        }
        nav ul {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
        a {
          font-size: 20px;
          font-weight: bold;
          transition: linear 0.1s;
        }
        a:hover {
          opacity: 0.5;
        }
        .active {
          color: #cc3f0c;
          border-bottom: solid #cc3f0c;
          border-bottom-left-radius: 110px 19px;
          border-bottom-right-radius: 120px 24px;
          padding: 5px 0;
        }
      `}</style>
    </nav>
  );
}
