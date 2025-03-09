import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.svg";
import Button from "@/components/Button";

const Navbar = () => {


 const navLinks=[
    {
        href:"#home",
        label:"Home"
    },
    {
        href:"#features",
        label:"Features"
    },{
        href:"#integration",
        label:"Integration"
    },{
        href:"#faqs",
        label:"FAQS"
    }
 ]



  return (
    <section className="flex justify-center p-4 lg:py-8 w-full">
      <div className="container max-w-5xl">
        <div className="flex justify-between border border-white/15 rounded-full py-2 px-4 md:px-2 items-center ">
          <div>
            <Image src={Logo} alt="Logo" className="h-9 md:h-auto w-auto " />
          </div>
        
          <div >
            <nav className="hidden lg:flex gap-6 font-medium ">
                {navLinks.map((link)=>{
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
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
           
             <Button variant="secondary" className="hidden md:block">Login</Button>
             <Button variant="primary" className="hidden md:block">Signup</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
