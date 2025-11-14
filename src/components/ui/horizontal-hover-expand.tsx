import React, { useState } from 'react';

const HoverExpandHorizontal = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mountain Landscape"
    },
    {
      src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Desert Dunes"
    },
    {
      src: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Forest Path"
    },
    {
      src: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Lake Reflection"
    },
    {
      src: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Ocean Waves"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
        maxWidth: '1000px',
        height: '600px'
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.5s ease-out',
              flex: hoveredIndex === index ? '3' : '1',
              minHeight: hoveredIndex === index ? '40%' : '10%'
            }}
          >
            {/* Background Image */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s',
              transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
              opacity: 0.9
            }} />
            
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)'
            }} />
            
            {/* Content */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '24px',
              paddingLeft: '32px'
            }}>
              <div style={{
                color: 'white',
                fontWeight: '700',
                fontSize: '28px',
                letterSpacing: '-0.5px',
                opacity: hoveredIndex === index ? 1 : 0,
                transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'all 0.3s'
              }}>
                {image.alt}
              </div>
              
              <div style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '14px',
                marginTop: '8px',
                opacity: hoveredIndex === index ? 1 : 0,
                transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'all 0.3s 0.1s'
              }}>
                Explore this stunning view
              </div>
            </div>

            {/* Collapsed Text */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '24px',
              opacity: hoveredIndex === null || hoveredIndex === index ? 0 : 1,
              transition: 'opacity 0.3s'
            }}>
              <div style={{
                color: 'white',
                fontWeight: '600',
                fontSize: '16px',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}>
                {image.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverExpandHorizontal;
