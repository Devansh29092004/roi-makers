"use client";

import { motion } from "framer-motion";
import { 
  IconHome, 
  IconTool, 
  IconUserCircle, 
  IconBriefcase, 
  IconNews, 
  IconMail,
  IconBrandGithub,
  IconX
} from "@tabler/icons-react";

export function FloatingDockNavigation() {
  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-5 w-5 text-gray-300" />,
      href: "/",
    },
    {
      title: "Work",
      icon: <IconBriefcase className="h-5 w-5 text-gray-300" />,
      href: "/work",
    },
    {
      title: "Services",
      icon: <IconTool className="h-5 w-5 text-gray-300" />,
      href: "/services",
    },
    {
      title: "About",
      icon: (
        <div className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
          A
        </div>
      ),
      href: "/about",
    },
    {
      title: "Blog",
      icon: <IconNews className="h-5 w-5 text-gray-300" />,
      href: "/blog",
    },
    {
      title: "Twitter",
      icon: <IconX className="h-5 w-5 text-gray-300" />,
      href: "https://twitter.com/roimakers",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-5 w-5 text-gray-300" />,
      href: "https://github.com/Devansh29092004/roi-makers",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div 
        className="bg-black/90 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-gray-700/30"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-6">
          {dockItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}