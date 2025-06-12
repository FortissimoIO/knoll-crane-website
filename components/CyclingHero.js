"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CyclingHero = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/images/kci-hero1.jpg',
    '/images/kci-hero2.jpg',
    '/images/kci-hero3.jpg',
    '/images/kci-hero4.png',
    '/images/kci-hero5.png',
    '/images/kci-hero6.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Hero background ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CyclingHero; 