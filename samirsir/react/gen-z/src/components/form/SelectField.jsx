import { useField } from 'formik'
import React from 'react'

export default function SelectField({ label, options, ...props }) {
    const [field, meta] = useField(props)
    
    return (
        <div className="w-full">
            <label 
                htmlFor={props.id || props.name} 
                className="block text-sm font-medium text-gray-700 mb-2"
            >
                {label}
            </label>
            <select
                {...field}
                {...props}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none appearance-none bg-white
                    ${meta.touched && meta.error 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50' 
                        : 'border-gray-300 focus:ring-2 focus:ring-green-200 focus:border-green-500'
                    }
                `}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {meta.touched && meta.error && (
                <p className="mt-1.5 text-sm text-red-500">{meta.error}</p>
            )}
        </div>
    )
}