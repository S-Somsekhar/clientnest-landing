'use client';

import { useState, useRef } from 'react';

export default function DemoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTimeJump = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="demo" className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            See the Magic in Action
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Watch how ClientNest turns <span className="font-semibold text-blue-600">leads into clients</span> effortlessly
        </p>

        {/* Video Player */}
        <div className="mt-10 group relative">
          <div 
            className={`relative rounded-xl overflow-hidden shadow-xl border-4 border-white transition-all duration-300 max-w-4xl mx-auto ${isPlaying ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => {
              if (!isPlaying && videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
              }
            }}
          >
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}

            {/* Video Element */}
            <video
              ref={videoRef}
              src="/demo.mp4"
              controls={isPlaying}
              poster="/demo-poster.png"
              className="w-full h-auto aspect-video bg-gray-100 cursor-pointer"
              aria-label="ClientNest platform demonstration"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>

        
        </div>

        {/* Progressive CTA */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#features"
            className="px-5 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
}