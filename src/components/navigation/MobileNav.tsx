'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMessage,
  IconMail,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#hero",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Services",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Testimonials",
      icon: (
        <IconMessage className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#testimonials",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
