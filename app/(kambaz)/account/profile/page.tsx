"use client";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  if (!currentUser) {
    return (
      <div id="wd-profile-screen">
        <h3>Profile</h3>
        <p>Not signed in. <a href="/account/signin">Sign in</a></p>
      </div>
    );
  }
  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        value={currentUser.username}
        readOnly
        placeholder="username"
        className="wd-username mb-2 block rounded border border-neutral-300 px-3 py-1.5"
      />
      <br />
      <input
        value={currentUser.password}
        readOnly
        placeholder="password"
        type="password"
        className="wd-password mb-2 block rounded border border-neutral-300 px-3 py-1.5"
      />
      <br />
      <input
        defaultValue={currentUser.firstName}
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
      />
      <br />
      <input
        defaultValue={currentUser.lastName}
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
      />
      <br />
      <input
        defaultValue={currentUser.email}
        type="email"
        id="wd-email"
        className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
      />
      <br />
      <select
        defaultValue={currentUser.role}
        id="wd-role"
        className="mb-3 block rounded border border-neutral-300 px-3 py-1.5"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Sign out
      </button>
    </div>
  );
}
