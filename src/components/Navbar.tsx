"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "./StaggeredMenu";

const menuItems: StaggeredMenuItem[] = [
  { label: "Projects", ariaLabel: "Projects", link: "#projects" },
  { label: "Approach", ariaLabel: "Approach", link: "#approach" },
  { label: "About", ariaLabel: "About", link: "#about" },
  { label: "Contact", ariaLabel: "Contact", link: "#contact" },
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Twitter", link: "https://twitter.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force isolation of this component's DOM tree
    if (containerRef.current) {
      containerRef.current.style.isolation = 'isolate';
      containerRef.current.style.contain = 'layout style paint';
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 9999, 
        pointerEvents: 'none'
      }}
    >
      {/* StaggeredMenu with custom logo */}
      <StaggeredMenu
        position="right"
        colors={['#FF9933', '#CC7722']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        logoUrl="/logo.webp"
        menuButtonColor="#000000"
        openMenuButtonColor="#000000"
        accentColor="#FF9933"
        isFixed={false}
        changeMenuColorOnOpen={true}
      />
    </div>
  );
}
