"use client";
import Link from "next/link";
import { useAccountContext } from "./AccountContext";
export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  return (
    <div id="wd-account-navigation">
      {!currentUser && (
        <>
          <Link href="/account/signin">Signin</Link> <br />
          <Link href="/account/signup">Signup</Link> <br />
        </>
      )}
      {currentUser && (
        <Link href="/account/profile">Profile</Link>
      )} <br />
    </div>
  );
}
