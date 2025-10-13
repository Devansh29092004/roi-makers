"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name:"Carrer",
      link: "/contact",
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary" className="px-4 py-2 text-sm">Login</NavbarButton> */}
            <NavbarButton variant="primary" className="px-4 py-2 text-sm">Contact</NavbarButton>
          </div>
        </NavBody>
      </Navbar>
    </div>
  );
}
