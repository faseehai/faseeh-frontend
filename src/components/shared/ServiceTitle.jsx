"use client";
import React from "react";
import { CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

function ServiceTitle({ title = "enter the title text" }) {
  return (
    <CardHeader className="overflow-x-hidden">
      <CardTitle className="text-3xl font-bold text-[#20b1c9] text-center my-5">
        <motion.h3
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {title}
        </motion.h3>
      </CardTitle>
    </CardHeader>
  );
}

export default ServiceTitle;