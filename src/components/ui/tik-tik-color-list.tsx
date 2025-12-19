"use client";

import React, { useState, useEffect, useRef } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  badge: string;
  bgColor: string;
  image: string;
}

interface TikTikColorListProps {
  projects?: Project[];
  className?: string;
  showPreview?: boolean;
  previewSize?: "sm" | "md" | "lg";
  enableSound?: boolean;
  infiniteScroll?: boolean;
  scrollThreshold?: number;
}

const previewSizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "w-40 h-40",
  md: "w-56 h-56",
  lg: "w-72 h-72",
};

const TikTikColorList: React.FC<TikTikColorListProps> = ({
  projects = [],
  className = "",
  showPreview = true,
  previewSize = "lg",
  infiniteScroll = true,
  scrollThreshold = 1000,
}) => {
  const [items, setItems] = useState<Project[]>(projects);
  const [currentBgColor, setCurrentBgColor] = useState<string>(projects[0]?.bgColor ?? "#fff");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!projects.length) return;
    setItems(projects);
    setCurrentBgColor(projects[0]?.bgColor ?? "#fff");
    setCurrentIndex(0);
  }, [projects]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !projects.length) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;
      const scrollHeight = container.scrollHeight;

      // Find which item is most visible
      let maxVisibility = 0;
      let mostVisibleIndex = 0;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const visibleHeight = Math.min(rect.bottom, containerRect.bottom) - Math.max(rect.top, containerRect.top);
        const visibility = visibleHeight / rect.height;
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleIndex = index;
        }
      });

      const projectCount = projects.length;
      const actualIndex = projectCount ? mostVisibleIndex % projectCount : 0;
      if (actualIndex !== currentIndex) {
        setCurrentIndex(actualIndex);
        setCurrentBgColor(items[mostVisibleIndex]?.bgColor ?? "#fff");
      }

      // Infinite scroll
      if (infiniteScroll && scrollHeight - scrollTop - clientHeight < scrollThreshold) {
        setItems((prev) => (projects.length ? [...prev, ...projects] : prev));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [items, projects, infiniteScroll, scrollThreshold, currentIndex]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    setIsDragging(true);
    const rect = imageRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setImagePosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // Set initial image position to bottom right
  useEffect(() => {
    const updatePosition = () => {
      if (!isDragging && imagePosition.x === 0 && imagePosition.y === 0) {
        setImagePosition({
          x: window.innerWidth - 320,
          y: window.innerHeight - 320,
        });
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isDragging, imagePosition]);

  const projectCount = projects.length;
  const safeIndex = projectCount ? currentIndex % projectCount : 0;
  const activeProject = projectCount ? projects[safeIndex] : undefined;

  return (
    <div
      className={`relative w-full h-full overflow-hidden transition-colors duration-700 ease-out ${className}`}
      style={{
        backgroundColor: currentBgColor,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Tik Tik Progress Indicator */}
      {/* <div className="fixed top-6 right-6 z-40 flex flex-col items-end gap-2">
        {projects.map((_, index) => (
          <div
            key={index}
            className="relative w-16 h-0.5 bg-black bg-opacity-20 rounded-full overflow-hidden"
          >
            <div
              className="absolute left-0 top-0 h-full bg-black transition-all duration-500 ease-out rounded-full"
              style={{
                width: index === safeIndex ? "100%" : "0%",
              }}
            />
          </div>
        ))}
      </div> */}

      {/* Scrollable content */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto overflow-x-hidden"
        style={{ 
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="px-8 md:px-16 py-16">
          {items.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="py-8 border-b border-black border-opacity-10"
            >
              <div className="group cursor-pointer py-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {project.name}
                    </h2>
                    <p className="text-lg md:text-xl text-black text-opacity-60 max-w-2xl group-hover:text-opacity-80 transition-all duration-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 pt-2">
                    <span className="text-sm text-black text-opacity-40 font-medium">
                      {((index % (projectCount || 1)) + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview image - Draggable */}
      {showPreview && activeProject && (
        <div
          ref={imageRef}
          className={`fixed ${previewSizeClasses[previewSize]} ${isDragging ? "cursor-grabbing" : "cursor-grab"} transition-opacity duration-500 ease-out z-50`}
          style={{
            left: `${imagePosition.x}px`,
            top: `${imagePosition.y}px`,
            opacity: isDragging ? 0.9 : 1,
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src={activeProject.image}
              alt={activeProject.name}
              className="w-full h-full object-cover transition-all duration-500 ease-out"
              draggable={false}
              style={{
                transform: isDragging ? "scale(0.98)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 ring-1 ring-black ring-opacity-10 rounded-2xl pointer-events-none" />
          </div>
        </div>
      )}
    </div>
  );
};

// Demo component
const DemoSkiper24: React.FC = () => {
  const projects: Project[] = [
    {
      id: 0,
      name: "Digital Dreams",
      description: "A journey through the intersection of technology and creativity",
      badge: "Digital Art",
      bgColor: "#f59e0b",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop&q=80",
    },
    {
      id: 1,
      name: "Lost Horizons",
      description: "Exploring the boundaries of conceptual art and digital expression",
      badge: "Concept Art",
      bgColor: "#fef3c7",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Urban Echoes",
      description: "Capturing the rhythm and soul of metropolitan landscapes",
      badge: "Photography",
      bgColor: "#a7f3d0",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=600&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Neon Nights",
      description: "Synthwave aesthetics meet modern digital illustration",
      badge: "Illustration",
      bgColor: "#ddd6fe",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=600&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Minimalist Mind",
      description: "Less is more in this exploration of negative space and form",
      badge: "Design",
      bgColor: "#fecaca",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=600&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Abstract Reality",
      description: "Where imagination transcends the boundaries of the physical world",
      badge: "3D Art",
      bgColor: "#bae6fd",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=600&fit=crop&q=80",
    },
  ];

  return (
    <main className="h-screen w-full bg-gray-50">
      <TikTikColorList
        projects={projects}
        showPreview
        previewSize="lg"
        enableSound={false}
        infiniteScroll
        scrollThreshold={1000}
      />
    </main>
  );
};

export { TikTikColorList };
export default DemoSkiper24;