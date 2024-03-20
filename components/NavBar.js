import * as React from 'react';
import Link from "next/link";
import { HiMenuAlt3 } from  "react-icons/hi";
import { MdClose } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Lexend_Tera, Merriweather } from "next/font/google";

const MerriReg400 = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
  })

export function NavBar() {
    const [showMenu, setShowMenu] = React.useState(true);
    return (
        <>
        <nav  className="h-[60px] grid grid-cols-2 lg:grid-cols-3 bg-[#402B3A] border-b border-amber-600 px-2 
                         md:px-8 lg:px-16">
            {/* show on all device */ }
            <ul className="hidden lg:flex flex-row gap-4 items-center">
               <li className={styles.navLink}><Link href="#">Shop</Link></li>
               <li className={styles.navLink}><Link href="#">Accessories</Link></li>
               <li className={styles.navLink}><Link href="#">Showroom</Link></li>
               <li className={styles.navLink}><Link href="/contact-us">Contact Us</Link></li>
            </ul>

              {/* show only on desktop */}
            <div className="flex flex-row gap-1 justify-start lg:justify-center items-center">
                <h1 className={`${MerriReg400.className} text-4xl text-gary-100`}>Irun</h1>
                <GoDotFill className="text-amber-400" />
            </div>

              {/* show only on mobile and tablets */}
               <div className="lg:hidden flex-justify-end items-center ">
                   <HiMenuAlt3 onClick={() => setShowMenu(false)} 
                     className={`${showMenu ? 'flex' : 'hidden'} text gray-200 text-4xl`}/>
                   <MdClose onClick={() => setShowMenu(true)} 
                     className={`${showMenu ? 'flex' : 'hidden'} text gray-200 text-4xl`}/>
               </div>

              {/* show only on desktop */}
             <div className="hidden lg:flex flex-row gap-6">
               <div className="flex flex-row gap-4">
                <blockquote className="flex flex-row items-center">
                    <FaGlobeAmericas className="text-amber-400"/>
                    <span className="text-gray-200">English</span>
                    <MdKeyboardArrowDown className="text-gray-200"/>
                </blockquote>
                
                <blockquote className="flex flex-row items-center">
                     <BsCurrencyDollar className="text-amber-400"/>
                     <span className="text-gary-200">USD</span>
                     <MdKeyboardArrowDown className="text-gray-200"/>
                </blockquote>
             </div>

                <ul className="flex flex-row gap-4 items-center">
                    <li><Link href="#"><CiSearch className={styles.navLinkIcon}/></Link></li>
                    <li><Link href="#"><CiUser className={styles.navLinkIcon}/></Link></li>
                    <li><Link href="#"><CiHeart className={styles.navLinkIcon}/></Link></li>
                    <li><Link href="#"><CiShoppingCart className={styles.navLinkIcon}/></Link></li>
                </ul>
            </div>
        </nav>
 
        {/*for mobile-only nav */}
        <div className={`${!showMenu ? 'flex' :'hidden'} flex-col gap-8 justify-center items-center  
                    lg:hidden min-h-80 w-full absolute top-[60px] left-0 z-10 bg-gray-800`}>
            <ul className="flex flex-col gap-3">
               <li className="text-gray-200 text-2xl text-center"><Link href="#">Shop</Link></li>
               <li className="text-gray-200 text-2xl text-center"><Link href="#">Accessories</Link></li>
               <li className="text-gray-200 text-2xl text-center"><Link href="#">Showroom</Link></li>
               <li className="text-gray-200 text-2xl text-center"><Link href="/contact-us">Contact Us</Link></li>
            </ul>

            <div className="flex flex-col gap-3">
                <ul className="flex flex-row gap-4 items-center">
                        <li><Link href="#"><CiSearch className={styles.navLinkIcon}/></Link></li>
                        <li><Link href="#"><CiUser className={styles.navLinkIcon}/></Link></li>
                        <li><Link href="#"><CiHeart className={styles.navLinkIcon}/></Link></li>
                        <li><Link href="#"><CiShoppingCart className={styles.navLinkIcon}/></Link></li>
                </ul>
            
            
                <div className="flex flex-row gap-4">
                    <blockquote className="flex flex-row items-center">
                        <FaGlobeAmericas className="text-amber-400"/>
                        <span className="text-gray-200">English</span>
                        <MdKeyboardArrowDown className="text-gray-200"/>
                    </blockquote>
                    
                    <blockquote className="flex flex-row items-center">
                        <BsCurrencyDollar className="text-amber-200"/>
                        <span className="text-gary-200">USD</span>
                        <MdKeyboardArrowDown className="text-gray-200"/>
                    </blockquote>
                </div>
             </div>
        </div>
        </>
    ) 

}

const styles = {
    navLink: "text-gray-200",
    navLinkIcon: "text-gray-200 text-2xl"
}