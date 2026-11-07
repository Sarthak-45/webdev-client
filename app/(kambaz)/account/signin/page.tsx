"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usersJson from "../../database/users.json";
import { useAccountContext } from "../AccountContext";
export default function Signin() {
  const { setCurrentUser } = useAccountContext();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const signin = () => {
    const user = usersJson.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (user) {
      setCurrentUser(user);
      router.push("/account/profile");
    } else {
      setError("Invalid username or password.");
    }
  };
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      {error && <p className="text-red-600">{error}</p>}
      <input
        placeholder="username"
        className="wd-username mb-2 block rounded border px-3 py-1.5"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />{" "}
      <br />
      <input
        placeholder="password"
        type="password"
        className="wd-password mb-2 block rounded border px-3 py-1.5"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />{" "}
      <br />
      <button
        type="button"
        id="wd-signin-btn"
        onClick={signin}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Sign in
      </button>{" "}
      <br />
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
