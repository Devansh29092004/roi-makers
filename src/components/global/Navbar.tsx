"use client";
import React from "react";
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "@/components/StaggeredMenu";

const menuItems: StaggeredMenuItem[] = [
  { label: "Projects", ariaLabel: "Projects", link: "#projects" },
  { label: "Approach", ariaLabel: "Approach", link: "#approach" },
  { label: "About", ariaLabel: "About", link: "#about" },
  { label: "Career", ariaLabel: "Career", link: "#career" },
  { label: "Blog", ariaLabel: "Blog", link: "#blog" },
   { label: "Team", ariaLabel: "Team", link: "/team" },
  { label: "Contact", ariaLabel: "Contact", link: "#contact" },
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Twitter", link: "https://twitter.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
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
        pointerEvents: 'none',
        isolation: 'isolate',
      }}
    >
      <StaggeredMenu
        position="right"
        colors={['#FF9933', '#CC7722']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        logoUrl="/roi-logo.webp"
        menuButtonColor="#000000"
        openMenuButtonColor="#000000"
        accentColor="#FF9933"
        isFixed={false}
        changeMenuColorOnOpen={true}
      />
    </div>
  );
}
