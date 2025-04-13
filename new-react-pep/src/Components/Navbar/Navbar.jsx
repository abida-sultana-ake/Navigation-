import React, { useState } from "react";
import Link from "./Link";
import { Menu } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <nav className="flex justify-between mx-10">
      <span className="flex">
        <Menu className="md:hidden"></Menu>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ml-6">
          My Navbar
        </button>
      </span>

      {/* system-1 */}
      {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

      {/* system-2 */}
      {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'><a href="{route.path}">{route.name}</a></li>)
                }
            </ul> */}

      {/* system-3 */}
      <ul className="flex">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>

      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
