import React, { useState } from 'react'
import Footer from '../components/Footer'
import { FaSearch, FaChevronDown, FaEnvelope, FaCommentDots, FaPhoneAlt, FaRocket, FaFileInvoiceDollar, FaLaptopCode, FaQuestionCircle, FaArrowRight } from 'react-icons/fa'

const faqsData = [
  {
    id: 1,
    question: "How to start a project?",
    answer: "Starting a project with us is simple. Reach out via our contact form or book a call, and our team will schedule an initial consultation to understand your needs and vision."
  },
  {
    id: 2,
    question: "What are your pricing plans?",
    answer: "Our pricing is custom-tailored to each project's scope, complexity, and requirements. We offer competitive rates for startups and comprehensive packages for enterprise clients."
  },
  {
    id: 3,
    question: "Do you offer support after delivery?",
    answer: "Yes! We believe in long-term partnerships. We offer post-launch support and monthly maintenance packages to ensure your digital products stay secure, updated, and run smoothly."
  },
  {
    id: 4,
    question: "What technologies do you use?",
    answer: "We specialize in modern web technologies including React, modern CSS frameworks like Tailwind, Node.js, and scalable cloud infrastructure to build robust applications."
  }
]

const helpCategories = [
  { icon: <FaRocket />, title: "Getting Started", desc: "Everything you need to kick off your project." },
  { icon: <FaFileInvoiceDollar />, title: "Billing", desc: "Information about pricing, invoices, and payments." },
  { icon: <FaLaptopCode />, title: "Technical Support", desc: "Help with technical issues and integrations." },
  { icon: <FaQuestionCircle />, title: "General Queries", desc: "Answers to common questions about Gen-Z." },
]

const contactOptions = [
  { icon: <FaEnvelope />, title: "Email Support", desc: "hello@genz.com", action: "Mail us" },
  { icon: <FaCommentDots />, title: "Live Chat", desc: "Future Upgrade Placeholder", action: "Chat Soon" },
  { icon: <FaPhoneAlt />, title: "Phone Support", desc: "+1 (555) 123-4567", action: "Call Now" },
]

const quickActions = [
  { title: "Start a Project", desc: "Ready to build something amazing?", btnText: "Let's Go" },
  { title: "Book a Call", desc: "Schedule a 1-on-1 discovery call.", btnText: "Schedule" },
  { title: "View Portfolio", desc: "Check out our previous robust work.", btnText: "See Work" },
]

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  // Filter FAQs based on the search input
  const filteredFaqs = faqsData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      
      {/* 1. Hero Section with Search bar */}
      <section className="pt-40 pb-20 px-6 sm:px-12 md:px-24 lg:px-40 text-center bg-amber-50">
        <span className="inline-block bg-amber-100 text-amber-500 text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-wide uppercase">
          Support Center
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          How can we <span className="text-amber-500">help you?</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Search our knowledge base or get in touch with our team for quick assistance.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-amber-400 text-xl group-focus-within:text-amber-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search for articles, support, or FAQs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-transparent focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100 shadow-sm text-lg transition-all"
          />
        </div>
      </section>

      {/* 5. Help Categories (Grid Cards) */}
      <section className="py-16 px-6 sm:px-12 md:px-24 lg:px-40 bg-white -mt-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {helpCategories.map((cat, idx) => (
            <div key={idx} className="bg-white border border-gray-100 shadow-md shadow-amber-50/50 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group cursor-pointer">
              <div className="text-4xl mb-4 bg-amber-50 text-amber-500 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-amber-400 group-hover:text-white transition-colors duration-300">
                {cat.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-2">{cat.title}</h3>
              <p className="text-gray-500 text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FAQ Section (Accordion + Search Filtered) */}
      <section className="py-16 px-6 sm:px-12 md:px-24 lg:px-40 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-500 text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-wide uppercase">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="p-6 flex justify-between items-center group">
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-500 transition-colors">{faq.question}</h3>
                    <div className={`text-amber-500 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                      <FaChevronDown />
                    </div>
                  </div>
                  <div className={`transition-all duration-300 overflow-hidden ${openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 bg-white border border-gray-100 rounded-2xl">
                <p className="text-gray-500 text-lg">No FAQs found matching "{searchQuery}".</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-amber-500 font-semibold hover:underline"
                >
                  View all FAQs
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Quick Actions */}
      <section className="py-16 px-6 sm:px-12 md:px-24 lg:px-40 bg-white border-b border-gray-100">
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quickActions.map((action, idx) => (
            <div key={idx} className="bg-amber-50 border border-amber-100 rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-gray-900 font-bold text-xl mb-2">{action.title}</h3>
              <p className="text-gray-500 mb-6 text-sm">{action.desc}</p>
              <button className="flex items-center justify-center gap-2 w-full py-3 bg-white text-amber-600 font-bold rounded-full hover:bg-amber-400 hover:text-white transition-colors border border-amber-200 shadow-sm">
                {action.btnText} <FaArrowRight className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Contact Options & 4. Contact Form Split Section */}
      <section className="py-20 px-6 sm:px-12 md:px-24 lg:px-40 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Options */}
          <div>
            <span className="inline-block bg-amber-100 text-amber-500 text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-wide uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900">
              Reach Out Directly
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Prefer to talk to a human? We’re available through multiple channels to assist you instantly. Choose what works best for you.
            </p>

            <div className="space-y-6">
              {contactOptions.map((opt, idx) => (
                <div key={idx} className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amber-200 transition-colors group">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center text-amber-500 mr-4 group-hover:scale-110 transition-transform">
                    {opt.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 font-bold">{opt.title}</h4>
                    <p className="text-sm text-gray-500">{opt.desc}</p>
                  </div>
                  <button className="text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors">
                    {opt.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 blur-3xl rounded-full opacity-50 -z-10 -translate-y-10 translate-x-10"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <button className="w-full py-4 bg-amber-400 text-black font-bold text-lg rounded-xl hover:bg-amber-500 hover:shadow-lg hover:-translate-y-1 transition-all">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Footer CTA */}
      <section className="py-20 text-center bg-gray-900 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Still need help? Contact us anytime 🚀
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
          Our support team is available 24/7. Don't hesitate to reach out if you have any doubts or need assistance.
        </p>
        <button className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-500 hover:scale-105 transition-all shadow-lg">
          Connect With Us Directly
        </button>
      </section>

      <Footer />
    </div>
  )
}
