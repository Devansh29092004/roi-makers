"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  isOverHero?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [isOverHero, setIsOverHero] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useMotionValueEvent(useScroll().scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? 'down' : 'up';
    
    // Check if we're over the hero section (roughly first 80vh)
    setIsOverHero(latest < window.innerHeight * 0.8);
    
    if (direction === 'down' && latest > 100) {
      setVisible(false);
    } else if (direction === 'up') {
      setVisible(true);
    }
    
    setLastScrollY(latest);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full px-4", className)}
      initial={{ y: 0 }}
      animate={{ 
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean; isOverHero?: boolean }>,
              { visible, isOverHero },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, isOverHero }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: isOverHero 
          ? visible 
            ? "0 2px 10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 153, 51, 0.15)"
            : "none"
          : visible
            ? "0 4px 20px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 153, 51, 0.2), 0 0 4px rgba(255, 153, 51, 0.1)"
            : "none",
        width: visible ? "70%" : "100%",
        y: visible ? (isOverHero ? 8 : 20) : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 sm:px-8 py-3 md:flex",
        isOverHero 
          ? visible 
            ? "bg-black/50 backdrop-blur-lg border border-[#FF9933]/20 mt-12"
            : "bg-transparent border-none mt-12"
          : visible 
            ? "bg-black/90 backdrop-blur-lg border border-[#FF9933]/30" 
            : "bg-transparent border-none",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-row items-center justify-end space-x-2 md:space-x-3 text-sm font-medium text-white transition duration-200 hover:text-[#FF9933]",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-2 md:px-3 lg:px-4 py-2 text-white hover:text-[#FF9933] text-xs md:text-sm"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[#FF9933]/20 backdrop-blur-sm"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-2xl px-0 py-3 md:hidden",
        visible ? "bg-black/80 backdrop-blur-lg border border-[#FF9933]/50" : "bg-transparent border-none",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-14 sm:top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-black/95 backdrop-blur-md border border-[#FF9933]/30 px-4 sm:px-6 py-6 sm:py-8 shadow-[0_4px_20px_rgba(0,_0,_0,_0.3),_0_1px_3px_rgba(0,_0,_0,_0.1)]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white hover:text-[#FF9933] cursor-pointer w-6 h-6 sm:w-7 sm:h-7 p-1" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white hover:text-[#FF9933] cursor-pointer w-6 h-6 sm:w-7 sm:h-7 p-1" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-white"
    >
      <div className="w-8 h-8 bg-[#FF9933] rounded-md flex items-center justify-center">
        <span className="text-white font-bold text-lg">R</span>
      </div>
      <span className="font-medium text-white text-base">ROI Makers</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  [key: string]: any;
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-[#FF9933] text-white hover:bg-[#FF9933]/80 shadow-[0_0_24px_rgba(255,_153,_51,_0.3)]",
    secondary: "bg-transparent text-white border border-white/30 hover:border-[#FF9933] hover:text-[#FF9933]",
    dark: "bg-black text-white border border-white/30 hover:border-[#FF9933]",
    gradient:
      "bg-gradient-to-b from-[#FF9933] to-[#CC7722] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
