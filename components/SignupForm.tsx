"use client";

import { useState, type FormEvent } from "react";
import { subscribe } from "@/lib/subscribe";

type Status = "idle" | "sending" | "done" | "error";

export default function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();

    setStatus("sending");
    try {
      await subscribe(email);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="signup-message" role="status">
        You’re on the list.
      </p>
    );
  }

  return (
    <form className="signup" onSubmit={onSubmit}>
      <label className="visually-hidden" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Email address"
        required
        disabled={status === "sending"}
      />
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Sign me up"}
      </button>
      {status === "error" && (
        <p className="signup-message signup-error" role="alert">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
