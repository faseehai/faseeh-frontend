import React from "react";

function ServiceDescription({ description = "Add Description" }) {
  return (
    <p className="max-w-4xl mx-auto px-8 text-center text-lg mb-10" dir="rtl">
      {description}
    </p>
  );
}

export default ServiceDescription;
