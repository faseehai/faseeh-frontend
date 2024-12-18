"use client";
import Link from "next/link";
import React from "react";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  FaCarSide,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaSquareXTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const quickLinks = [
  {
    title: "الرئيسية",
    url: "/",
  },
  {
    title: "من نحن",
    url: "/about-us",
  },
  {
    title: "تواصل معنا",
    url: "/contact-us",
  },
];

const services = [
  {
    title: "خدمة الإعراب ", // Proofreading Service
    url: "/services/proof-reading",
  },
  {
    title: "خدمة التشكيل", // Tashkeel
    url: "/services/tashkeel",
  },
  {
    title: "قصص الأمثال للأطفال", // Children Stories
    url: "/services/children-stories",
  },
  {
    title: "خدمة التدقيق اللغوي", // Grammar Checker
    url: "/services/grammer-checker",
  },
  {
    title: "رسائل البريد الاحترافية", // Professional Emails
    url: "/services/professional-emails",
  },
  {
    title: "نصوص تسويقية", // Marketing Texts
    url: "/services/marketing-texts",
  },
];

function Footer() {
  return (
    <>
      <footer className="footer bg-[#DEF4F7] text-black opacity-80 p-10 md:grid md:grid-cols-4 font_barlow">
        
        {/* contact us  */}
        <nav data-aos="fade-up">
          <h6 className="footer-title text-[#1C9AAF]">معلومات التواصل</h6>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlinePhoneInTalk className="text-lg  text-[#20b1c9]" />
              <p>+966505668558</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlineMailOutline className="text-lg  text-[#20b1c9]" />
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center ">
              <IoLocationOutline className="text-lg text-[#20b1c9]" />
              <p>المملكة العربية السعودية - القصيم - بريدة </p>
            </div>
          </div>
        </nav>
        
        {/* Quick link  */}
        <nav className="md:ms-10" data-aos="fade-up">
          <h6 className="footer-title text-[#1C9AAF]">روابط سريعة</h6>

          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-decoration-none hover:text-[#1C9AAF] hover:font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* service  */}
        <nav data-aos="fade-up">
          <h6 className="footer-title text-[#1C9AAF] z-10" >خدماتنا</h6>
          {services.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-decoration-none hover:text-[#1C9AAF] hover:font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </nav>

<<<<<<< HEAD
=======
        {/* contact us  */}
        <nav data-aos="fade-up">
          <h6 className="footer-title text-[#1C9AAF]">معلومات التواصل</h6>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlinePhoneInTalk className="text-lg  text-[#20b1c9]" />
              <p>+966505668558</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlineMailOutline className="text-lg  text-[#20b1c9]" />
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center ">
              <IoLocationOutline className="text-lg text-[#20b1c9]" />
              <p>المملكة العربية السعودية - القصيم - بريدة</p>
            </div>
          </div>
        </nav>

>>>>>>> 7ac2704 (Update Footer.jsx)
        <aside data-aos="fade-up">
          <div className="w-full flex items-end justify-end">
            <div className="flex items-start justify-start">
              <Link
                href="/"
                className="ms-0 h-14 w-14 md:h-16 md:w-16 rounded-full "
              >
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="w-full h-full object-contain rounded-[50%]"
                />
              </Link>
            </div>
          </div>

          <p className="text-justify" dir="rtl">
            يضمن موقع فصيح نجاح عملك من خلال تقديم خدمات لغوية عربية متميزة مع
            التزام متفانٍ في تقديم خدمات التدقيق اللغوي والتحليل النحوي، نؤمن
            بأن النجاح يتحقق معاً، حيث نصيغ النصوص ونصقلها لتحقيق التميز
          </p>

          {/* social media link  */}
          <div className="w-full flex items-end justify-end">
            <div className="flex justify-center items-center gap-x-2 ">
              <Link href={"https://twitter.com/faseehapp"}>
                <FaSquareXTwitter className="text-3xl text-[#1C9AAF] hover:scale-110 hover:font-semibold transition-all" />
              </Link>
              <Link href={"https://www.instagram.com/faseeh.app/"}>
                <RiInstagramFill className="text-3xl text-[#1C9AAF] hover:scale-110 hover:font-semibold transition-all" />
              </Link>
              <Link href={"https://www.youtube.com/@/faseeh.app/"}>
                <FaYoutube className="text-4xl text-[#1C9AAF] hover:scale-110 hover:font-semibold transition-all" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/80291042/admin/feed/posts/"
                }
              >
                <FaLinkedin className="text-3xl text-[#1C9AAF] hover:scale-110 hover:font-semibold transition-all" />
              </Link>
            </div>
          </div>
        </aside>
      </footer>

      <div className="bg-[#DEF4F7] relative pt-10 pb-1 overflow-hidden h-10 border-b border-[#1C9AAF]">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center "
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {/* <FaCarSide className="text-5xl text-[#20b1c9]" /> */}
          <div className="flex items-center">
            <Link href="/" className="ms-0 md:h-10 w-10 rounded-[50%]">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="w-full h-full object-contain rounded-[50%]"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      <footer
        // data-aos="fade-right"
        className="footer bg-[#DEF4F7] text-base-content flex justify-center p-5"
      >
        <span className="text-lg font-semibold text-[#20b1c9]">
          © 2024 All rights reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
