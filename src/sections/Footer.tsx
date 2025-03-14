import React from 'react'
import Logo from '@/assets/images/logo.svg'
import Image from 'next/image'

const footerLinks = [
    {
        href: "#",
        label: "Contact"
    },
    {
        href: "#",
        label: "Privacy Policy"
    },
    {
        href: "#",
        label: "Terms and Conditions"
    },
]

const Footer = () => {
    return (
        <section className='py-24 px-4'>

            <div className='container mx-auto'>

                <div className='flex flex-col gap-6 items-center md:flex-row md:justify-between'>
                    <div>
                        <Image src={Logo} alt='logo' />
                    </div>
                    <div className=''>
                        <nav className='flex gap-6 text-white/50'>
                            {
                                footerLinks.map((link) => {
                                    return (
                                        <a href={link.href} key={link.label}>{link.label}</a>
                                    )
                                })
                            }
                        </nav>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Footer
