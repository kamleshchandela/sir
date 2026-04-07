import React from 'react'
import { FaSpinner } from 'react-icons/fa6'

export default function Button({ children, variant = 'primary', className = '', disabled, ...props }) {
    const baseStyles = "px-6 py-3.5 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
    
    const variants = {
        primary: "bg-green-600 text-white hover:bg-green-700 hover:shadow-green-200",
        secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
    }

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={disabled}
            {...props}
        >
            {disabled ? (
                <span className="flex items-center justify-center gap-2">
                    <FaSpinner className="animate-spin" />
                    Processing...
                </span>
            ) : children}
        </button>
    )
}