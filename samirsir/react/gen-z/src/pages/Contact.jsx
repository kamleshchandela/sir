import React from 'react'
import InputField from '../components/form/InputField'
import SelectField from '../components/form/SelectField'
import TextAreaField from '../components/form/TextAreaField'
import Button from '../components/form/Button'
import { FaEnvelope, FaPhone, FaLocationDot, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import { assets } from '../assets/assets'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const subjectOptions = [
    { value: '', label: 'Select Subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'business', label: 'Business Inquiry' }
]

const validationSchema = Yup.object({
    fullName: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Full Name is required'),
    email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone must be exactly 10 digits')
        .required('Phone number is required'),
    subject: Yup.string()
        .required('Please select a subject'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required'),
    companyName: Yup.string(),
    attachment: Yup.mixed()
})

function ContactForm() {
    const initialValues = {
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        companyName: '',
        attachment: null
    }

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Form Submitted:', values)
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.')
            setSubmitting(false)
            resetForm()
        }, 1500)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField 
                            name="fullName" 
                            label="Full Name" 
                            placeholder="Enter your full name"
                        />
                        <InputField 
                            name="email" 
                            label="Email Address" 
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField 
                            name="phone" 
                            label="Phone Number" 
                            type="tel"
                            placeholder="Enter 10-digit phone"
                        />
                        <SelectField 
                            name="subject" 
                            label="Subject" 
                            options={subjectOptions}
                        />
                    </div>

                    <InputField 
                        name="companyName" 
                        label="Company Name (Optional)" 
                        placeholder="Enter company name"
                    />

                    <TextAreaField 
                        name="message" 
                        label="Message" 
                        placeholder="Write your message here..."
                        rows={5}
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Attach File (Optional)
                        </label>
                        <input 
                            type="file" 
                            onChange={(event) => setFieldValue('attachment', event.currentTarget.files[0])}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="flex-1"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                        <Button 
                            type="reset" 
                            variant="secondary"
                            className="flex-1"
                        >
                            Reset
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-[50vh] min-h-[400px]">
                <img 
                    src={assets.heroImg} 
                    alt="Contact Us" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 to-green-700/60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl text-green-100 font-medium">
                        We are here to help you
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                        <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                        <ContactForm />
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-2xl text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p className="text-gray-600">support@genzagriculture.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-2xl text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone</p>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaLocationDot className="text-2xl text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Address</p>
                                        <p className="text-gray-600">123 Agriculture Lane, Farm City, FC 12345</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="font-semibold text-gray-900 mb-4">Follow us on</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300">
                                        <FaWhatsapp className="text-2xl" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300">
                                        <FaLinkedin className="text-2xl" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300">
                                        <FaInstagram className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-64">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{border: 0}} 
                                allowFullScreen="" 
                                loading="lazy"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}