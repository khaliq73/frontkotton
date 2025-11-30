import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

// Import all video files
import vid1 from '../../assets/vid1.mp4';
import vid2 from '../../assets/vid2.mp4';
import vid3 from '../../assets/vid3.mp4';
import vid4 from '../../assets/vid4.mp4';
import vid5 from '../../assets/vid5.mp4';
import vid6 from '../../assets/vid6.mp4';
import vid7 from '../../assets/vid7.mp4';
import vid8 from '../../assets/vid8.mp4';
import vid9 from '../../assets/vid 9.mp4';
import vid10 from '../../assets/vid 10.mp4';

const VideoGallery = () => {
  const videos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0); // Starting index for carousel
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const modalVideoRef = useRef(null);
  
  const videosPerView = 4; // Show 4 videos at a time, but move one by one

  // Auto-play on hover
  useEffect(() => {
    if (hoveredIndex !== null && !isModalOpen) {
      const video = videoRefs.current[hoveredIndex];
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Auto-play failed, ignore
        });
      }
    } else {
      // Pause all videos when not hovering
      videoRefs.current.forEach((video) => {
        if (video && hoveredIndex === null) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [hoveredIndex, isModalOpen]);

  // Handle modal video play
  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.play();
      setIsPlaying(true);
    } else if (!isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isModalOpen]);

  const handleVideoClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
    // Pause all gallery videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  const handlePlayPause = () => {
    const video = modalVideoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMute = () => {
    const video = modalVideoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % videos.length;
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + videos.length) % videos.length;
    setSelectedIndex(prevIndex);
  };

  // Carousel navigation - move one by one
  const handleCarouselNext = () => {
    setCarouselIndex((prev) => {
      const next = prev + 1;
      // If we've reached the end, loop back to start
      if (next > videos.length - videosPerView) {
        return 0;
      }
      return next;
    });
  };

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => {
      const prevIndex = prev - 1;
      // If we're at the start, go to the last possible position
      if (prevIndex < 0) {
        return Math.max(0, videos.length - videosPerView);
      }
      return prevIndex;
    });
  };

  // Get visible videos for carousel
  const getVisibleVideos = () => {
    const visible = [];
    for (let i = 0; i < videosPerView; i++) {
      const index = (carouselIndex + i) % videos.length;
      visible.push(index);
    }
    return visible;
  };

  const visibleVideos = getVisibleVideos();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Reels</h2>
          <p className="text-gray-600 text-center">Check out our latest content</p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto w-[90%]">
          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={handleCarouselPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous videos"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleCarouselNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next videos"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </button>

            {/* Main Video Gallery - Carousel Layout */}
            <div className="flex gap-3 md:gap-4 overflow-hidden">
              {visibleVideos.map((index) => {
                const isHovered = hoveredIndex === index;
                const video = videos[index];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative flex-shrink-0 w-[calc(25%-0.75rem)] md:w-[calc(25%-1rem)] aspect-[9/16]"
                  >
                    <div
                      className="relative w-full h-full rounded-lg overflow-hidden bg-black cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => handleVideoClick(index)}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                      />

                      {/* Play Button Overlay - Always visible when not playing */}
                      {!isHovered && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 md:w-7 md:h-7 text-black ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-all duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-md bg-black rounded-lg overflow-hidden py-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full aspect-[9/16] max-h-[80vh] mx-auto">
                  <video
                    ref={modalVideoRef}
                    src={videos[selectedIndex]}
                    className="w-full h-full object-cover"
                    muted={isMuted}
                    loop
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors z-20"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Controls */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity group">
                  {/* Top Controls */}
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                      <button
                        onClick={handlePlayPause}
                        className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6 ml-1" />
                        )}
                      </button>
                      <button
                        onClick={handleMute}
                        className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-6 h-6" />
                        ) : (
                          <Volume2 className="w-6 h-6" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bottom - Video Counter & Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full">
                      {selectedIndex + 1} / {videos.length}
                    </div>
                    {videos.length > 1 && (
                      <div className="flex gap-2">
                        <button
                          onClick={handlePrev}
                          className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoGallery;

