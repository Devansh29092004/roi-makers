import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden flowing-menu-container">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Timeline | null>(null);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    // Clean up any existing animations on unmount
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouchDevice) return; // Skip mouse events on touch devices
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    // Kill any existing animation
    tweenRef.current?.kill();
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    tweenRef.current = gsap.timeline({ defaults: animationDefaults });
    tweenRef.current.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouchDevice) return; // Skip mouse events on touch devices
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    // Kill any existing animation
    tweenRef.current?.kill();
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    tweenRef.current = gsap.timeline({ defaults: animationDefaults });
    tweenRef.current.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, '<');
  };

  const handleTouchStart = () => {
    if (!isTouchDevice || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    setIsActive(true);
    tweenRef.current?.kill();
    
    tweenRef.current = gsap.timeline({ defaults: animationDefaults });
    tweenRef.current.set(marqueeRef.current, { y: '101%' })
      .set(marqueeInnerRef.current, { y: '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleTouchEnd = () => {
    if (!isTouchDevice || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    setIsActive(false);
    tweenRef.current?.kill();
    
    tweenRef.current = gsap.timeline({ defaults: animationDefaults });
    tweenRef.current.to(marqueeRef.current, { y: '101%' })
      .to(marqueeInnerRef.current, { y: '-101%' }, '<');
  };

  return (
    <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300" ref={itemRef}>
      <a
        className="flex items-center justify-between h-full px-4 sm:px-6 relative cursor-pointer no-underline group active:scale-[0.98] transition-transform duration-150"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <span className="text-black font-bold text-lg sm:text-xl md:text-2xl group-hover:opacity-0 transition-opacity duration-300 z-10">
          {text}
        </span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-black rounded-full flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 shrink-0 group-active:scale-90">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </a>

      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%]"
        ref={marqueeRef}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          ref={marqueeInnerRef}
          className="flex items-center justify-center w-full h-full"
        >
          <div className="w-full h-full bg-gradient-to-t from-black/75 via-black/50 to-black/20 flex items-center justify-center p-4 sm:p-6">
            <span className="text-white uppercase font-bold tracking-[0.15em] sm:tracking-[0.2em] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center drop-shadow-lg">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
