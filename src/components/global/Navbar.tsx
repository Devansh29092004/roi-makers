"use client";
import React from "react";
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "@/components/StaggeredMenu";

const menuItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Home", link: "/" },
  { label: "Projects", ariaLabel: "Projects", link: "/projects" },
  { label: "About", ariaLabel: "About", link: "/about" },
  { label: "Careers", ariaLabel: "Careers", link: "/careers" },
  { label: "Blog", ariaLabel: "Blog", link: "/blog" },
   { label: "Team", ariaLabel: "Team", link: "/team" },
  { label: "Contact", ariaLabel: "Contact", link: "/contact" },
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "Instagram", link: "https://www.instagram.com/roimakers/" },
  { label: "Twitter", link: "http://x.com/roimakers" },
  { label: "LinkedIn", link: "https://www.linkedin.com/company/roimakers/" },
];

export default function Navbar() {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 9999,
        isolation: 'isolate',
        pointerEvents: 'none',
      }}
    >
      <StaggeredMenu
        position="right"
        colors={['#FFAA17', '#E69815', '#CC8713', '#B36619']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        logoUrl="/roi-logo.webp"
        menuButtonColor="#000000"
        openMenuButtonColor="#000000"
        accentColor="#FFAA17"
        isFixed={false}
        changeMenuColorOnOpen={true}
      />
    </div>
  );
}
