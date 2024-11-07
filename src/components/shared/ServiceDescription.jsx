import React from "react";
// import MediaPlayer from "./MediaPlayer";
// Inside your contact-us page
import dynamic from "next/dynamic";

// Dynamically import MediaPlayer with SSR disabled
const MediaPlayer = dynamic(() => import("@/components/shared/MediaPlayer"), {
  ssr: false,
});

function ServiceDescription({
  description = "Add Description",
  videoPath = "",
}) {
  return (
    <>
      {videoPath && (
        <div className="w-52 h-52 m-auto" data-aos="fade-up">
          <MediaPlayer src={videoPath} />
        </div>
      )}
      <p
        data-aos="fade-up"
        className="max-w-4xl mx-auto px-8 text-center text-lg mb-10"
        dir="rtl"
      >
        {description}
      </p>
    </>
  );
}

export default ServiceDescription;
