'use client';

import { useState } from 'react';

interface ImageOption {
  id: number;
  name: string;
  url: string;
  alt: string;
  position: string;
  type?: string; // Optional: "svg-component" for special components
}

interface ImageSwitcherDebugProps {
  currentOption: number;
  onOptionChange: (optionId: number) => void;
  imageOptions: ImageOption[];
}

export default function ImageSwitcherDebug({ 
  currentOption, 
  onOptionChange, 
  imageOptions 
}: ImageSwitcherDebugProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg font-medium transition-all duration-300 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Image Switcher
      </button>

      {/* Options Panel */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 bg-white rounded-lg shadow-2xl p-4 w-80 max-h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#212E3F]">
              Hero Background Options
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            {imageOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  onOptionChange(option.id);
                  setIsOpen(false);
                }}
                className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                  currentOption === option.id
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Preview Thumbnail */}
                  <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                    {option.type === "svg-component" ? (
                      // Special preview for SVG component (GCC Map)
                      <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    ) : (
                      <img
                        src={option.url}
                        alt={option.alt}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Option Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#212E3F]">
                        {option.name}
                      </span>
                      {currentOption === option.id && (
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {option.type === "svg-component" ? "SVG Component" : `Option ${option.id}`}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              💡 Click an option to preview instantly
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
