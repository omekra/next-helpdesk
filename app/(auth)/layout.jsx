import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Next Helpdesk</h1>
        <Link href="/signup">Signup</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
}
