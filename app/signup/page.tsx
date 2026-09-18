import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Sign me up | ${site.name}`,
  robots: { index: false },
};

export default function Signup() {
  return (
    <div className="page">
      <header className="masthead">
        <Link href="/" className="wordmark wordmark-small">
          {site.name}
        </Link>
      </header>

      <main className="signup-page">
        <h1 className="signup-title">Sign me up</h1>
        <SignupForm />
      </main>
    </div>
  );
}
