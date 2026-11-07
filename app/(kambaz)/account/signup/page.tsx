"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
export default function Signup() {
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
    verify: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
  });
  const [error, setError] = useState("");
  const signup = () => {
    if (form.password !== form.verify) {
      setError("Passwords do not match.");
      return;
    }
    const newUser: User = {
      _id: crypto.randomUUID(),
      id: Date.now(),
      username: form.username,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      loginId: form.username,
      section: "S101",
      role: form.role as User["role"],
      lastActivity: new Date().toISOString().split("T")[0],
      totalActivity: "00:00:00",
    };
    setCurrentUser(newUser);
    router.push("/account/profile");
  };
  const inp = "mb-2 block rounded border border-neutral-300 px-3 py-1.5";
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      {error && <p className="text-red-600">{error}</p>}
      <input placeholder="username" className={inp} value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <br />
      <input placeholder="password" type="password" className={inp} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <br />
      <input placeholder="verify password" type="password" className={`wd-password-verify ${inp}`} value={form.verify} onChange={(e) => setForm({ ...form, verify: e.target.value })} />
      <br />
      <input placeholder="First name" className={inp} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
      <br />
      <input placeholder="Last name" className={inp} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
      <br />
      <input placeholder="Email" type="email" className={inp} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <br />
      <button type="button" onClick={signup} className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
        Sign up
      </button>
      <br />
      <br />
      <a href="/account/signin">Sign in</a>
    </div>
  );
}
