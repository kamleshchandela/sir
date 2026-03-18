import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">

                <div>
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer mb-4">
                        <div className="w-3 h-3 rounded-full bg-amber-500 animate-ping absolute"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <p className="text-2xl font-extrabold text-white tracking-tight group-hover:text-amber-500 transition-colors">Gen-Z</p>
                    </Link>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        Helping modern brands grow globally with strategic solutions, creative excellence, and high-performance technology.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-amber-500 transition-colors">About</Link></li>
                        <li><Link to="/carrer" className="hover:text-amber-500 transition-colors">Career</Link></li>
                        <li><Link to="/support" className="hover:text-amber-500 transition-colors">Support</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Services</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="hover:text-amber-500 transition-colors cursor-pointer">UI/UX Design</li>
                        <li className="hover:text-amber-500 transition-colors cursor-pointer">Web Development</li>
                        <li className="hover:text-amber-500 transition-colors cursor-pointer">Brand Strategy</li>
                        <li className="hover:text-amber-500 transition-colors cursor-pointer">SEO Optimization</li>
                        <li className="hover:text-amber-500 transition-colors cursor-pointer">Digital Marketing</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Newsletter</h3>
                    <p className="text-sm mb-4 text-gray-400">
                        Subscribe to get updates about our latest projects, news, and insights.
                    </p>

                    <div className="flex shadow-lg rounded-xl overflow-hidden mt-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-3 text-black outline-none bg-gray-50 focus:bg-white transition-colors"
                        />
                        <button className="bg-amber-400 px-6 text-black font-extrabold hover:bg-amber-500 transition-colors">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
                <p>&copy; 2026 Gen-Z Agency. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0 font-medium">
                    <span className="hover:text-amber-500 cursor-pointer transition-colors">Terms of Service</span>
                    <span className="hover:text-amber-500 cursor-pointer transition-colors">Privacy Policy</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer