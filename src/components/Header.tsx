"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import HomeIcon from "./ui/icons/HomeIcon";
import HomeFilledIcon from "./ui/icons/HomeFilledIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFilledIcon from "./ui/icons/SearchFilledIcon";
import NewIcom from "./ui/icons/NewIcom";
import NewFilledIcom from "./ui/icons/NewFilledIcom";
import ColorButton from "./ui/ColorButton";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIicon: <HomeFilledIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIicon: <SearchFilledIcon />,
  },
  {
    href: "/new",
    icon: <NewIcom />,
    clickedIicon: <NewFilledIcom />,
  },
];
export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-white z-10 border-b">
      <div className="flex justify-between items-center px-6">
        <Link href="/">
          <h1 className="text-3xl font-bold">INSTAGRAM</h1>
        </Link>
        <nav>
          <ul className="flex gap-4 items-center p-4">
            {menu.map(({ href, icon, clickedIicon }, index) => (
              <li key={index}>
                <Link href={href}>
                  {pathname === href ? clickedIicon : icon}
                </Link>
              </li>
            ))}
            <ColorButton text="Sign In" onClick={() => {}}></ColorButton>
          </ul>
        </nav>
      </div>
    </header>
  );
}
