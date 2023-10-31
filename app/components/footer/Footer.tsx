import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container > 
                <div className="flex flex-col pt-12 pb-8 md:flex-row justify-between">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">
                            Shop Categories
                        </h3>
                        <Link href='#'>Phones</Link>
                        <Link href='#'>Laptops</Link>
                        <Link href='#'>Desktop</Link>
                        <Link href='#'>TVs</Link>
                        <Link href='#'>Watches</Link>
                        <Link href='#'>Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">
                            Coustomer Service 
                        </h3>
                        <Link href='#'>Contact Us</Link>
                        <Link href='#'>Shipping Policy</Link>
                        <Link href='#'>Returns & Exchanges</Link>
                        <Link href='#'>FAQs</Link>
                        <Link href='#'>Reviews</Link>
                        
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">
                            About Us
                        </h3>
                        <p className="mb-4">At our Electronic store, we are dedicated to providing the latest and greatest devices and accessories to our customers, with a wide selection of phones, Tvs , Laptops, Watches and Accessories.</p>
                        <p>&copy;{new Date().getFullYear()} E-Shop, All rights reserved</p>
                        
                    </div>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">
                            Follow Us
                        </h3>
                        <div className="flex gap-2 text-2xl">
                        <Link href='#'><BsFacebook/> </Link>
                        <Link href='#'><AiFillLinkedin/> </Link>
                        <Link href='#'><AiFillYoutube/> </Link>
                        <Link href='#'><AiFillTwitterCircle/> </Link>
                        </div>
                        
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
}
 
export default Footer;