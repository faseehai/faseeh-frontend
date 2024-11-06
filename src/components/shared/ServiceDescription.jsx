import React from "react";
import MediaPlayer from "./MediaPlayer";

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
