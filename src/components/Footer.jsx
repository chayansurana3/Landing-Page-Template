import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa"; 

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="font-semibold p-4 text-center lg:text-left">
                    <h2 className="text-white font-cursive text-5xl mb-8 p-4">Galaxy</h2>
                    <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="p-4">
                    <ul className="flex lg:flex-col">
                        <li className="mr-6 mb-2"><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                        <li className="mr-6 mb-2"><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                        <li className="mr-6 mb-2"><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        <li className="mr-6 mb-2"><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                        <li className="mr-6 mb-2"><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                    </ul>
                </div>
                <div className="p-4">
                    <ul className="flex lg:flex-col p-4">
                        <li className="mr-4 mb-4"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-white text-xl hover:text-gray-400" /></a></li>
                        <li className="mr-4 mb-4"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-white text-xl hover:text-gray-400" /></a></li>
                        <li className="mr-4 mb-4"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white text-xl hover:text-gray-400" /></a></li>
                        <li className="mr-4 mb-4"><a href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><FaTelegram className="text-white text-xl hover:text-gray-400" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
