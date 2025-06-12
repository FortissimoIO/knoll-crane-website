"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ConstructionIcon from '@mui/icons-material/Construction';
import Image from 'next/image';

export const Carousel = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: false })
    ]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-lg bg-gray-900" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                            <div className="relative h-[600px] md:h-[700px] bg-black">
                                {slide.image ? (
                                    <div className="h-full flex items-center justify-center">
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            width={600}
                                            height={400}
                                            className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                                                slide.orientation === 'portrait' ? 'h-80' : 'h-64'
                                            }`}
                                            quality={90}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                        <ConstructionIcon style={{ fontSize: 120 }} className="text-gray-700" />
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 md:p-12">
                                    <div className="max-w-2xl">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{slide.title}</h3>
                                        <p className="text-white/90 text-lg">{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${!prevBtnEnabled && 'opacity-50'
                    }`}
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                aria-label="Previous slide"
            >
                <ArrowBackIcon />
            </button>

            <button
                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${!nextBtnEnabled && 'opacity-50'
                    }`}
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                aria-label="Next slide"
            >
                <ArrowForwardIcon />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}; 