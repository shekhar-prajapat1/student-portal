// Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/quizzes">
              Quizzes
            </Link>
          </li>
          <li>
            <Link href="/register">
              Register
            </Link>
          </li>
          <li>
            <Link href="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export {Header};