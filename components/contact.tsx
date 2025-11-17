"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm ${formData.name || 'interested'}. I would like to know more about your projects.`
    const url = `https://wa.me/919373117899?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+919373117899",
      link: "tel:+919373117899",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Mail,
      title: "Email",
      value: "patilvinod970@gmail.com",
      link: "mailto:patilvinod970@gmail.com",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Nagpur, Maharashtra",
      link: "#",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-100",
    },
  ]

  return (
    <section id="contact" className="relative py-12 md:py-20 px-3 sm:px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-40 -right-20 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200"
          >
            <motion.div 
              className="w-2 h-2 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-yellow-600 font-semibold text-xs uppercase tracking-wider">
              Contact Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-secondary mb-3 md:mb-4"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto"
          >
            Have questions about our projects? We'd love to hear from you.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 ${info.bgColor} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-secondary text-sm md:text-base mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm truncate">
                      {info.value}
                    </p>
                  </div>
                </div>

                {/* Hover line effect */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl"
        >
          <div className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-secondary focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-secondary focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-secondary focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="+91 98765 43210"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-secondary focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition-all"
                placeholder="Tell us about your project..."
                required
              />
            </motion.div>

            {/* Status Messages */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
              >
                Please fill in all required fields and try again.
              </motion.div>
            )}

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-600 text-sm"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`flex-1 py-3 md:py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  submitStatus === "success"
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      ✓
                    </motion.div>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 hover:cursor-pointer bg-green-500 hover:bg-green-600 text-white py-3 md:py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.button>
            </div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-4 text-xs text-gray-500"
          >
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Quick Response
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Free Consultation
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Expert Guidance
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}