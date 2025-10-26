import React, { useState } from 'react';
import styles from './Gallery.module.css';
import Help from '../../Help/Help';

const Gallery = () => {
    // Base mock data for initial images (only 3 items)
    const galleryImages = [
        { id: 1, src: "https://placehold.co/400x400/282a36/90929c?text=Image+1", alt: "Abstract building design" },
        { id: 2, src: "https://placehold.co/400x400/282a36/90929c?text=Image+2", alt: "Abstract building design" },
        { id: 3, src: "https://placehold.co/400x400/282a36/90929c?text=Image+3", alt: "Abstract building design" },
    ];
    
    // Initialize with a larger set of images for initial scrolling demonstration
    const initialImages = [...galleryImages, ...galleryImages].map((img, index) => ({
        ...img,
        id: index + 1,
        src: `https://placehold.co/400x400/282a36/90929c?text=Initial+Image+${index + 1}`
    }));
  
    const [images, setImages] = useState(initialImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    // We are showing 3 images at a time
    const visibleImages = images.slice(currentIndex, currentIndex + 3);

    const canGoBack = currentIndex > 0;
    // Can go forward if the next block of 3 starts within the image bounds
    const canGoForward = currentIndex + 3 < images.length;

    const handleNext = () => {
        if (canGoForward) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (canGoBack) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleAddImage = () => {
        const newId = images.length + 1;
        const newImage = {
            id: newId,
            // Using a slightly different color for added images for distinction
            src: `https://placehold.co/400x400/1e293b/f8fafc?text=New+Image+${newId}`,
            alt: `Dynamically added image ${newId}`
        };
    
        // Add new image
        setImages(prevImages => [...prevImages, newImage]);

        // Automatically scroll to show the new image if it was added outside the current view
        // If the new total count is greater than the current window end + 1, move the window
        if (newId > currentIndex + 3) {
            // Set the new index so the newly added image is the last one visible
            setCurrentIndex(newId - 3);
        }
    };

    return (
        <div className="relative flex -mt-4 bg-[#37393d] backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 w-full border-r-4 border-b-4 border-gray-950">
            <Help />

            <div className='w-9/10 pt-4 pr-6 mb-4'>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        {/* Gallery Title Button */}
                        <button className="px-4 py-2 text-white bg-black rounded-lg text-lg font-semibold shadow-lg">
                            Gallery
                        </button>
                    </div>
                    <div className='flex'>
                        {/* Add Image Button */}
                        <button onClick={handleAddImage} className={`${styles.btn_neumorphic_shadow} flex items-center space-x-1 px-4 py-2 mr-8 text-sm font-medium text-gray-200 bg-[#41474e] rounded-lg hover:bg-gray-600 transition-colors duration-150 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                            </svg>
                            <span>ADD IMAGE</span>
                        </button>

                        {/* Navigation Arrows */}
                        <div className="flex space-x-2">
                            <button
                                onClick={handlePrev}
                                disabled={!canGoBack}
                                className={`${styles.btn_neumorphic_shadow} p-2 rounded-full transition-colors duration-150 ${canGoBack
                                    ? 'bg-[#1c1e20] hover:bg-gray-600 text-[#6f787c] cursor-poniter'
                                    : 'bg-[#1c1e20] text-gray-600 cursor-not-allowed'
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                                    <path d="m12 19-7-7 7-7" />
                                    <path d="M19 12H5" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!canGoForward}
                                className={`${styles.btn_neumorphic_shadow} p-2 rounded-full transition-colors duration-150 ${canGoForward
                                    ? 'bg-[#1c1e20] hover:bg-gray-600 text-[#6f787c] cursor-pointer'
                                    : 'bg-[#1c1e20] text-gray-600 cursor-not-allowed'
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {/* Grid Icon Placeholder */}
                    {/* <div className="absolute top-4 left-4 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 12h18" /><path d="M12 3v18" /></svg>
                </div> */}
        
                    {visibleImages.map(image => (
                        <div
                            key={image.id}
                            className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer"
                            style={{ aspectRatio: '1 / 1' }} // Force square aspect ratio
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                                // Fallback for failed image load
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/400x400/282a36/90929c?text=Load+Failed";
                                }}
                            />
                        </div>
                    ))}
                    {/* Placeholder for empty slots if less than 3 are visible */}
                    {visibleImages.length < 3 && Array.from({ length: 3 - visibleImages.length }).map((_, index) => (
                        <div
                            key={`placeholder-${index}`}
                            className="rounded-lg bg-gray-800 flex items-center justify-center text-gray-600"
                            style={{ aspectRatio: '1 / 1' }}
                        >
                            <span className="text-sm">Empty Slot</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Gallery