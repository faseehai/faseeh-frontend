"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const MediaPlayer = ({ src, loop = true, autoplay = true, className = "" }) => {
  const [animationData, setAnimationData] = useState(null);
  const fileType = src ? src.split(".").pop() : null; // Determine the file extension if src is provided

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined" && fileType === "json") {
      const loadMedia = async () => {
        try {
          const response = await fetch(src);
          if (!response.ok) {
            return console.log(
              `Failed to fetch animation from ${src}: ${response.statusText}`
            );
          }
          const data = await response.json();
          setAnimationData(data);
        } catch (err) {
          console.error("Error loading JSON animation:", err);
        }
      };

      loadMedia();
    }
  }, [src, fileType]);

  return (
    <div className={className}>
      {fileType === "json" && animationData ? (
        <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
      ) : fileType === "mp4" && (
        <video
          src={src}
          loop={loop}
          autoPlay={autoplay}
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      )}
    </div>
  );
};

export default MediaPlayer;
