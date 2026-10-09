"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Signin", path: "/account/signin", id: "wd-account-signin-link" },
  { label: "Signup", path: "/account/signup", id: "wd-account-signup-link" },
  { label: "Profile", path: "/account/profile", id: "wd-account-profile-link" },
];

export default function AccountNavigation() {
  const pathname = usePathname();
  return (
    <nav id="wd-account-navigation">
      <ul className="m-0 list-none p-0">
        {links.map(({ label, path, id }) => {
          const active = pathname === path;
          return (
            <li key={path}>
              <Link
                href={path}
                id={id}
                className={`block border-0 py-2 px-3 text-red-600 no-underline${
                  active ? " border-l-4 border-red-600 bg-red-50 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
