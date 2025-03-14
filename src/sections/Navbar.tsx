"use client"

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {


  const navLinks = [
    {
      href: "#home",
      label: "Home"
    },
    {
      href: "#features",
      label: "Features"
    }, {
      href: "#integration",
      label: "Integration"
    }, {
      href: "#faqs",
      label: "FAQS"
    }
  ]

  const [isOpen, setIsOpen] = useState(false);


  return (
    <section className="fixed top-0 flex  p-4 lg:py-8 w-full z-50 ">
      <div className="container max-w-5xl mx-auto">
        <div className="border border-white/15 rounded-[27px] md:rounded-full  bg-neutral-950/70 backdrop-blur ">

          <div className="flex justify-between py-2 px-4 md:pr-2 items-center ">
            <div>
              <Image src={Logo} alt="Logo" className="h-9 md:h-auto w-auto " />
            </div>

            <div >
              <nav className="hidden lg:flex gap-6 font-medium ">
                {navLinks.map((link) => {
                  return <a href={link.href} key={link.label}>{link.label}</a>
                })}
              </nav>
            </div>


            <div className="flex justify-end gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}

              >
                <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && "rotate-45  -translate-y-1")}></line>
                <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && "opacity-0")}></line>
                <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && "-rotate-45  translate-y-1")}></line>
              </svg>

              <Button variant="secondary" className="hidden md:block">Login</Button>
              <Button variant="primary" className="hidden md:block">Signup</Button>
            </div>
          </div>


          <AnimatePresence>
            {isOpen && <motion.div className="md:hidden  overflow-hidden"
              initial={{height:0}}
              animate={{height:'auto'}}
              exit={{height:0}}
              transition={{duration:0.3}}
            >
              <div className="flex flex-col items-center gap-4 py-2">
              {
                navLinks.map((link) => {
                  return (<a href={link.href} key={link.label} >{link.label}</a>)
                })
              }
              <Button variant="primary" className="">Login</Button>
              <Button variant="secondary" className="">Signup</Button>
              </div>
             
            </motion.div>}
          </AnimatePresence>


        </div>

      </div>
    </section>
  );
};

export default Navbar;
